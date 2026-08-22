async function loadJSON() {
  try {
    const response = await fetch('fishstory.json'); // Path to your JSON file
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data); // Your JSON data is now a usable JS object
  } catch (error) {
    console.error('Error loading JSON:', error);
  }
}

loadJSON();