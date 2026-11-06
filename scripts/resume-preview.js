/*
 * Renders the first page of the English CV to the WebP files the resume page
 * shows before react-pdf is loaded. The output is committed, because the CI
 * runner has neither poppler nor cwebp: run `npm run resume:preview` after
 * replacing the PDF. static-routes.js fails the build when the two disagree.
 */
const { execFileSync } = require("child_process");
const crypto = require("crypto");
const fs = require("fs");
const os = require("os");
const path = require("path");

const assets = path.join(__dirname, "..", "src", "assets");
const pdf = path.join(assets, "Dawid_Olko_CV.pdf");
const outDir = path.join(assets, "Resume");
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "resume-preview-"));

fs.mkdirSync(outDir, { recursive: true });
for (const width of [714, 1012, 2024]) {
  const png = path.join(tmp, `page-${width}`);
  execFileSync("pdftoppm", ["-png", "-singlefile", "-f", "1", "-l", "1", "-scale-to-x", String(width), "-scale-to-y", "-1", pdf, png]);
  execFileSync("cwebp", ["-quiet", "-q", "72", "-m", "6", `${png}.png`, "-o", path.join(outDir, `cv-${width}.webp`)]);
}
fs.writeFileSync(
  path.join(outDir, "source.sha256"),
  `${crypto.createHash("sha256").update(fs.readFileSync(pdf)).digest("hex")}\n`,
);
fs.rmSync(tmp, { recursive: true });
