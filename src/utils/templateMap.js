// src/utils/templateMap.js

/* ------------------------------------------
   Template Assets (Replace later with real ones)
------------------------------------------ */
const templates = {
  shirt_default: require('../../assets/templates/shirt.png'),
  pants_default: require('../../assets/templates/pants.png'),
  shoes_default: require('../../assets/templates/shoes.png'),
  accessory_default: require('../../assets/templates/accessory.png'),
};

/* ------------------------------------------
   Template Map (Category आधारित mapping)
------------------------------------------ */
export const TEMPLATE_MAP = {
  Shirts: {
    fallback: templates.shirt_default,
  },
  Pants: {
    fallback: templates.pants_default,
  },
  Shoes: {
    fallback: templates.shoes_default,
  },
  Accessories: {
    fallback: templates.accessory_default, // ✅ NEW
  },
};

/* ------------------------------------------
   Get Template (ML-ready abstraction)
------------------------------------------ */
export function getTemplate(type, subtype) {
  if (!type) return null;

  const categoryMap = TEMPLATE_MAP[type];

  if (!categoryMap) return null;

  // future: subtype-specific mapping
  if (subtype && categoryMap[subtype]) {
    return categoryMap[subtype];
  }

  return categoryMap.fallback;
}