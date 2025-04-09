//your JS code here. If required.
const changeBtn = document.getElementById('change_button');
const ReseBtn = document.getElementById('Reset');

function resetGridColors {

	for(int i =1;i<=9;i++){
		const gridItem = document.getElementById(i.toString());
        gridItem.style.backgroundColor = 'transparent';
      }
    }

    changeBtn.addEventListener('click', () => {
      const blockId = document.getElementById('block_id').value;
      const color = document.getElementById('colour_id').value;

      resetGridColors();

      const target = document.getElementById(blockId);
      if (target) {
        target.style.backgroundColor = color;
      } else {
        alert("Invalid block ID! Please enter a number between 1 and 9.");
      }
    });

    resetBtn.addEventListener('click', resetGridColors);
	
}