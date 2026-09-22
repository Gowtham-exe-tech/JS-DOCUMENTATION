export const formatPrice = (amount) => `₹${amount.toFixed(2)}`;

export const createProductLabel = ({ name, category }) =>
  `${name} (${category})`;
