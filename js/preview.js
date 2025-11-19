/* Live preview logic */
function updatePreview() {
  // Character 1 preview
  prev1Name.textContent = c1Name.value || "Name";
  prev1Level.textContent = c1Level.value || "1";
  prev1Ability.textContent = c1Ability.value || "Ability";
  prev1Img.src = c1Img.value || "";
  const h1 = Number(c1HP.value) || 100;
  prev1HP.style.width = Math.max(0, Math.min(100, (h1 / 100) * 100)) + "%";
  prev1HP.parentElement.setAttribute('title', `HP: ${h1}/${h1}`);

  // Character 2 preview
  prev2Name.textContent = c2Name.value || "Name";
  prev2Level.textContent = c2Level.value || "1";
  prev2Ability.textContent = c2Ability.value || "Ability";
  prev2Img.src = c2Img.value || "";
  const h2 = Number(c2HP.value) || 100;
  prev2HP.style.width = Math.max(0, Math.min(100, (h2 / 100) * 100)) + "%";
  prev2HP.parentElement.setAttribute('title', `HP: ${h2}/${h2}`);
}


/* Attach input listeners for real-time preview */
const inputs = [
  c1Name, c1Level, c1HP, c1Ability, c1Img,
  c2Name, c2Level, c2HP, c2Ability, c2Img
];

inputs.forEach(inp => inp.addEventListener('input', updatePreview));