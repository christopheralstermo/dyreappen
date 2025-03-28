function createAnimalProfileView() {
    return /*HTML*/`
    <div>
        <h1>Registrer dyr</h1>
        <br>

    <div class="flex-container">
     
       <div> ${getInputRows()}
       </div>

       <div class="upload-container">
       <label for="profile-picture">Upload Picture:</label>
       <input type="file" id="profile-picture" name="profile-picture" accept="image/*" onchange="showPreview(event)">
       <div class="preview">
           <p>No image selected</p>
       </div>     
    `;
}

function getInputRows() {
    let inputRowsHtml = '';
    for(const product of model.data.products) {
        inputRowsHtml += /*HTML*/`
            <tr>
                ${product.name}
                <br>
                <input type="text" placeholder="Skriv her" />
                <br>
            
            </tr>
        `;
    }

inputRowsHtml += ` <button onclick="changePage('animalProfile')">Registrer</button> `;
    return inputRowsHtml;
}

function changePage(newPage) {
    model.app.currentPage = newPage;
    updateView();
}