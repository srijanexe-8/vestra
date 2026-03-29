// src/utils/templateMap.js

/* ------------------------------------------
   Template Assets
------------------------------------------ */

const templates = {
  Shirts: {
    "T-Shirt": require('../../assets/templates/shirts/tshirt.png'),
    "Full Sleeve": require('../../assets/templates/shirts/fullsleeve.png'),
    "Hoodie": require('../../assets/templates/shirts/hoodie.png'),
    "Polo": require('../../assets/templates/shirts/polo.png'),
    fallback: require('../../assets/templates/shirts/default.png'),
  },

  Pants: {
    "Jeans": require('../../assets/templates/pants/jeans.png'),
    "Chinos": require('../../assets/templates/pants/chinos.png'),
    "Joggers": require('../../assets/templates/pants/joggers.png'),
    fallback: require('../../assets/templates/pants/default.png'),
  },

  Shoes: {
    "Sneakers": require('../../assets/templates/shoes/sneakers.png'),
    "Formal": require('../../assets/templates/shoes/formal.png'),
    "Boots": require('../../assets/templates/shoes/boots.png'),
    fallback: require('../../assets/templates/shoes/default.png'),
  },

  Accessories: {
    "Watch": require('../../assets/templates/accessories/watch.png'),
    "Cap": require('../../assets/templates/accessories/cap.png'),
    "Belt": require('../../assets/templates/accessories/belt.png'),
    fallback: require('../../assets/templates/accessories/default.png'),
  },
};

/* ------------------------------------------
   Get Template (CORE LOGIC)
------------------------------------------ */
export function getTemplate(type, subtype) {
  if (!type) return null;

  const categoryMap = templates[type];

  if (!categoryMap) return null;

  // ✅ subtype match
  if (subtype && categoryMap[subtype]) {
    return categoryMap[subtype];
  }

  // ✅ fallback
  return categoryMap.fallback;
}