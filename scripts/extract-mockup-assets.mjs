// One-off dev script: decodes the 13 photos template "1b" needs out of the
// design-canvas export's embedded base64 resource blob and writes them to
// public/images with descriptive names. Not part of the app runtime.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const mockupPath = path.join(rootDir, "PickShift Landing Page_Proposal2.html");
const outDir = path.join(rootDir, "public", "images");

const RESOURCES_LINE_INDEX = 208; // line 209, 0-indexed
const RESOURCE_TO_FILENAME = {
  "e4752ce8-031c-44ae-afcb-3f41b6812dd5": "hero-background.jpg",
  "e93fa55f-030f-4942-a52a-b5aabf885823": "path-marketplace.jpg",
  "06dfa982-90b0-4a20-9dca-fd8c36ae8748": "path-labour-hire.jpg",
  "6fbc65db-93d1-42ba-aab9-61edb4ba9bf5": "industry-healthcare.jpg",
  "5389b3db-b9bd-499e-ba82-b8a786073a97": "industry-warehouse-logistics.jpg",
  "cd5ac4f2-fcab-460b-94d3-7cba0667fc5f": "industry-hospitality.jpg",
  "7b6e4011-55b4-4fd9-8f58-bff9a1d814d6": "industry-construction.jpg",
  "1f759391-0ce7-40ae-b472-7235955d93ca": "industry-retail.jpg",
  "10abc3e8-25c6-4db8-ac7c-9e0e74b0d73f": "industry-accommodation.jpg",
  "d158cd71-24fe-420d-adc7-e4616f5ab366": "industry-personal-care.jpg",
  "567ff98c-c9a5-48b8-9ed2-66a6278f6a4a": "testimonial-avatar-1.jpg",
  "c425c324-24c6-4e81-a5b3-0c24d27c796c": "testimonial-avatar-2.jpg",
  "139e2a60-3a56-4d91-a904-03930e0bc831": "testimonial-avatar-3.jpg",
};

const lines = readFileSync(mockupPath, "utf-8").split("\n");
const resources = JSON.parse(lines[RESOURCES_LINE_INDEX].trim());

mkdirSync(outDir, { recursive: true });

let written = 0;
for (const [id, filename] of Object.entries(RESOURCE_TO_FILENAME)) {
  const resource = resources[id];
  if (!resource) {
    console.warn(`Missing resource ${id} (${filename})`);
    continue;
  }
  const buffer = Buffer.from(resource.data, "base64");
  writeFileSync(path.join(outDir, filename), buffer);
  written += 1;
  console.log(`wrote ${filename} (${buffer.length} bytes)`);
}

console.log(`Done: ${written}/${Object.keys(RESOURCE_TO_FILENAME).length} images extracted.`);
