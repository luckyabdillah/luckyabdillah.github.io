import { ArrowLeft, Code2, Cpu, HardDrive, Volume2, Wrench } from 'lucide-react';
import { Button } from '../../components/ui/button';

const hardware = [
  ['Board', 'ESP32-WROOM-32'],
  ['Display', 'ST7789 TFT, 240 x 240'],
  ['Storage', 'SPI microSD reader'],
  ['Audio', 'I2S DAC/amplifier + speaker'],
  ['Input', '10K potentiometer + push button'],
];

const pins = [
  ['TFT / VSPI', 'SCK GPIO 18 · MOSI GPIO 23 · DC GPIO 2 · RST GPIO 4'],
  ['SD / HSPI', 'SCK GPIO 14 · MISO GPIO 12 · MOSI GPIO 13 · CS GPIO 5'],
  ['I2S Amplifier', 'BCLK GPIO 27 · LRC GPIO 26 · DIN GPIO 25'],
  ['Controls', 'Volume GPIO 34 · Button GPIO 32 → GND'],
];

const ESP32MultiMedia = () => (
  <main className="min-h-screen bg-background text-foreground">
    <article className="container mx-auto px-6 pb-24 pt-32 lg:pt-40">
      <div className="mx-auto max-w-4xl">
        <Button render={<a href="/#blogs" />} variant="ghost" className="mb-12 -ml-3 rounded-full text-muted-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to blogs
        </Button>

        <header className="border-b border-border pb-12">
          <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">
            <span className="h-px w-10 bg-primary-light" /> Embedded systems · 8 min read
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
            Building an ESP32 Multimedia Player Without Wi-Fi
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            A standalone player that keeps GIF animation and WAV playback in sync, while reading every asset directly from an SD card.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {['ESP32', 'ST7789', 'I2S', 'SD card', 'Arduino C++'].map((tag) => (
              <span key={tag} className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">{tag}</span>
            ))}
          </div>
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_260px]">
          <div className="space-y-12 text-lg leading-relaxed text-muted-foreground">
            <section>
              <p>
                The project started from a simple constraint: make a small device that can show an animation and play its matching sound without depending on a network connection. The result is an ESP32-WROOM-32 player for 240x240 GIFs and 16-bit PCM WAV files.
              </p>
              <p className="mt-5">
                A button selects a new media pair, a potentiometer controls volume in real time, and the device discovers its content from the SD card at boot. Adding a new scene means adding a GIF and WAV with the same basename.
              </p>
            </section>

            <section>
              <h2 className="mb-5 text-3xl font-semibold tracking-tight text-foreground">The core idea: two jobs, two cores</h2>
              <p>
                GIF decoding and audio streaming have different timing profiles. The animation runs through the main loop on core 1, while the audio player runs as a dedicated task on core 0. That separation means waiting for audio data does not freeze the display.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-5"><Cpu className="mb-4 h-5 w-5 text-primary-light" /><p className="font-semibold text-foreground">Core 1 · Visual Loop</p><p className="mt-2 text-base">AnimatedGIF decodes frames and renders them to the ST7789 display.</p></div>
                <div className="rounded-xl border border-border bg-card p-5"><Volume2 className="mb-4 h-5 w-5 text-primary-light" /><p className="font-semibold text-foreground">Core 0 · Audio Task</p><p className="mt-2 text-base">The WAV parser streams PCM samples through the I2S amplifier.</p></div>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-3xl font-semibold tracking-tight text-foreground">Let the SD card describe the content</h2>
              <p>
                On boot, <pre className="inline-block rounded-md border border-border bg-card p-1 text-sm"><code>sd_manifest</code></pre> scans the <pre className="inline-block rounded-md border border-border bg-card p-1 text-sm">/gif</pre> and <pre className="inline-block rounded-md border border-border bg-card p-1 text-sm">/audio</pre> folders, matches filenames case-insensitively, and writes the valid pairs into <pre className="inline-block rounded-md border border-border bg-card p-1 text-sm">manifest.json</pre>. The player then uses that manifest as its source when selecting a random scene.
              </p>
              <pre className="mt-6 overflow-x-auto rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-foreground">
                <code>
                  {`/esp32-multimedia/
├── gif/
│   ├── 000.gif
│   └── 001.gif
├── audio/
│   ├── 000.wav
│   └── 001.wav
└── manifest.json`}
                </code>
              </pre>
              <p className="mt-5">Only complete pairs are used. A <pre className="inline-block rounded-md border border-border bg-card p-1 text-sm">005.gif</pre> without <pre className="inline-block rounded-md border border-border bg-card p-1 text-sm">005.wav</pre> is ignored, which keeps the randomizer from selecting incomplete media.</p>
            </section>

            <section>
              <h2 className="mb-5 text-3xl font-semibold tracking-tight text-foreground">Hardware and wiring</h2>
              <div className="overflow-hidden rounded-xl border border-border bg-card">
                {hardware.map(([label, value]) => <div key={label} className="grid gap-2 border-b border-border p-4 last:border-0 sm:grid-cols-[130px_1fr]"><span className="text-sm font-semibold text-foreground">{label}</span><span className="text-base">{value}</span></div>)}
              </div>
              <div className="mt-4 space-y-2 rounded-xl border border-border bg-card p-5 text-base">{pins.map(([label, value]) => <p key={label}><strong className="text-foreground">{label}:</strong> {value}</p>)}</div>
              <p className="mt-5">The display uses VSPI and the SD module uses HSPI so the two peripherals do not compete for the same physical bus. GPIO12 is a boot strapping pin; if the board boot-loops after connecting the SD module, move MISO to another safe GPIO and update <pre className="inline-block rounded-md border border-border bg-card p-1 text-sm">config.h</pre>.</p>
            </section>

            <section>
              <h2 className="mb-5 text-3xl font-semibold tracking-tight text-foreground">Preparing media that plays smoothly</h2>
              <p>WAV files must be 16-bit PCM, mono or stereo. GIFs should ideally be 240x240 and not delta-encoded. For animated files that appear frozen, the README recommends coalescing frames first, then scaling, padding, and generating an optimized palette.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3"><div className="rounded-xl border border-border bg-card p-5"><Wrench className="mb-3 h-5 w-5 text-primary-light" /><p className="font-semibold text-foreground">Coalesce</p><p className="mt-2 text-base">Reconstruct full frames with ImageMagick.</p></div><div className="rounded-xl border border-border bg-card p-5"><HardDrive className="mb-3 h-5 w-5 text-primary-light" /><p className="font-semibold text-foreground">Scale + pad</p><p className="mt-2 text-base">Keep the original ratio inside a 240x240 canvas.</p></div><div className="rounded-xl border border-border bg-card p-5"><Volume2 className="mb-3 h-5 w-5 text-primary-light" /><p className="font-semibold text-foreground">Convert audio</p><p className="mt-2 text-base">Use PCM WAV instead of MP3 for predictable streaming.</p></div></div>
            </section>

            <section>
              <h2 className="mb-5 text-3xl font-semibold tracking-tight text-foreground">Build and run</h2>
              <ol className="space-y-4 text-base"><li><strong className="text-foreground">1.</strong> Install Arduino IDE and the ESP32 board package.</li><li><strong className="text-foreground">2.</strong> Install the AnimatedGIF library from Library Manager.</li><li><strong className="text-foreground">3.</strong> Open <pre className="inline-block rounded-md border border-border bg-card p-1 text-sm">esp32-multimedia.ino</pre> and select ESP32 Dev Module.</li><li><strong className="text-foreground">4.</strong> Prepare the SD card folders, then upload the sketch.</li></ol>
            </section>

            <footer className="border-t border-border pt-8"><p className="text-base">The complete source, pin configuration, troubleshooting notes, and media processing commands are available in the repository README.</p><Button render={<a href="https://github.com/luckyabdillah/esp32-multimedia" target="_blank" rel="noopener noreferrer" />} className="mt-6 rounded-full">View repository <Code2 className="h-4 w-4" /></Button></footer>
          </div>

          <aside className="hidden lg:block"><div className="sticky top-28 border-l border-border pl-6 text-sm text-muted-foreground"><p className="mb-4 font-semibold uppercase tracking-[0.18em] text-primary-light">In this article</p><ol className="space-y-3"><li>Two cores, two jobs</li><li>SD card manifest</li><li>Hardware and wiring</li><li>Media preparation</li><li>Build and run</li></ol></div></aside>
        </div>
      </div>
    </article>
  </main>
);

export default ESP32MultiMedia;