// One-off dev script: decodes the 9 photos template "1a" needs out of the
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
  "4325ca48-a929-4c8d-b916-1fe375b018fd": "avatar-worker-1.jpg",
  "41a480ee-c583-462b-aaca-5282ec4b2655": "avatar-worker-2.jpg",
  "f402243b-c676-4918-80db-f7e59a96da27": "avatar-worker-3.jpg",
  "5040128f-445c-4bd4-80c4-571118fca4e9": "industry-strip-healthcare.jpg",
  "0a2106bf-e5b5-4557-8757-eff90482d7bf": "industry-strip-construction.jpg",
  "02eeffa2-0d57-468c-843a-c33974f213e4": "industry-strip-hospitality.jpg",
  "63c4e48b-b1b6-406a-be9c-91e0f2d93a4e": "industry-strip-warehouse-logistics.jpg",
  "14aff854-6f1d-4c10-8252-8ea255bc58bd": "industry-strip-retail.jpg",
  "32871b40-b8e4-4892-b24b-96a3abc3463c": "industry-strip-accommodation.jpg",
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
