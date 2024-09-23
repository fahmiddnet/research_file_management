
const inputFileBtn = document.getElementById('addInputFile');
const fileInputArea = document.getElementById('fileInputArea');

inputFileBtn.addEventListener('click', () => {
    var input = document.createElement("INPUT");
    var customNameInput = document.createElement("INPUT");
    var div = document.createElement("div");
    var div2 = document.createElement("div");
    var cancelBtn = document.createElement("i");

    input.setAttribute("type", "file");
    input.setAttribute("name", "files[]");
    input.setAttribute("class", "form-control");
    customNameInput.setAttribute("type", "text");
    customNameInput.setAttribute("placeholder","Please Write a file name");
    customNameInput.setAttribute("name", "custom_file_name[]");
    customNameInput.setAttribute("class", "form-control");
    // div.setAttribute("class", "mb-2 d-flex gap-2");
    div.classList.add("class","input-group","mb-3");
    div2.classList.add("class","input-group","mb-3");

    // cancelBtn.textContent = "Cancel";
    cancelBtn.classList.add("ri-delete-bin-line", "fs-2", "text-danger");
    cancelBtn.addEventListener("click", function () {
        div.remove();
        div2.remove();
    });

    fileInputArea.appendChild(div2);
    div2.appendChild(customNameInput);
    fileInputArea.appendChild(div);
    div.appendChild(input);
    div2.appendChild(cancelBtn);
});

const hiddenFileStatus = document.querySelectorAll('.hiddenFileStatus');

hiddenFileStatus.forEach((item)=>{
    item.addEventListener('click', ()=>{
        if (item.getAttribute('status') == 'false') {
            item.setAttribute('status', 'true');
            item.children[0].classList.add('ri-eye-off-line');
            item.children[0].classList.remove('ri-eye-line');
            item.children[1].setAttribute('name', 'privacy[]');
        }
        else {
            item.setAttribute('status', 'false');
            item.children[0].classList.remove('ri-eye-off-line');
            item.children[0].classList.add('ri-eye-line');
            item.children[1].setAttribute('name', 'show[]');
        }
    });
})
