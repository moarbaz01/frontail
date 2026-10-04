import fs from "node:fs";
import path from "node:path";

const brainDir = "C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\85a7672d-d123-4ea5-a631-8b575d27c2e5";
const targetDir = path.join(process.cwd(), "public", "seo");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const map = {
  "mvp-development-cost.jpg": "mvp_cost_photo_1789187279837.jpg",
  "mvp-development-timeline.jpg": "mvp_timeline_photo_1789187304868.jpg",
  "choose-mvp-development-agency.jpg": "choose_agency_photo_1789187323584.jpg",
  "saas-development-cost.jpg": "saas_cost_photo_1789187341452.jpg",
  "multi-tenant-saas-architecture.jpg": "multi_tenant_photo_1789187358027.jpg",
  "saas-mvp-vs-full-product.jpg": "saas_mvp_vs_full_photo_1789187377752.jpg",
  "react-native-vs-flutter.jpg": "react_native_vs_flutter_photo_1789187394988.jpg",
  "mobile-app-development-cost.jpg": "mobile_cost_photo_1789187414492.jpg",
  "ai-app-development.jpg": "ai_app_dev_photo_1789187433788.jpg",
  "add-ai-to-saas.jpg": "add_ai_to_saas_photo_1789187454097.jpg",
  "custom-software-vs-off-the-shelf.jpg": "custom_software_vs_offtheshelf_photo_1789187473104.jpg",
  "software-product-development-process.jpg": "choose_agency_photo_1789187323584.jpg",
};

for (const [targetName, srcName] of Object.entries(map)) {
  const srcPath = path.join(brainDir, srcName);
  const destPath = path.join(targetDir, targetName);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${srcName} -> ${targetName}`);
  } else {
    console.warn(`Source not found: ${srcPath}`);
  }
}
