//display duet
//show another fields if duet is selected
//else, don't show any field
showDuet = () => {
    let performance = document.getElementById('performance').value;

    if (performance === 'duet') {
        document.getElementById('duet').style.display = 'block';

        //when is displayed duet
        //cheking only if duet is selected
        let first_name_2 = document.querySelector('#first_name_2').value;
        let last_name_2 = document.querySelector('#last_name_2').value;
        let student_id_2 = document.querySelector('#student_id_2').value;
    
        const divErrInputs = () => {
         document.querySelector('#divErr2').style.display = 'block';
         document.querySelector('#divErr2').innerHTML = 'There is one invalid input or missing!'
        }

        //inputs 
        if(!isNaN(first_name_2) || first_name_2 === '') divErrInputs();
        if(!isNaN(last_name_2) || last_name_2 === '') divErrInputs();
        if(isNaN(student_id_2) || student_id_2 === '') divErrInputs();
    }
    else {
        document.getElementById('duet').style.display = 'none';
    }

}

styleChanges = () => {
    document.getElementById('performance').focus();
    document.getElementById('divErr').style.display = 'none';

    document.querySelector('#display_area').style.display = 'none';
}

notErrDuet = () => {
    document.querySelector('#divErr2').style.display = 'none';
}