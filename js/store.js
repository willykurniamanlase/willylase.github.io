fetch("../data.json")
.then(response => {
   return response.json();
})
.then(data => {
    const gradute = document.querySelector('#gradute');
    data.data.graduated.forEach((v) => {
        // console.log(v)
        gradute.innerHTML += `
        <div class="d-flex justify-content-between mt-2">
            <div class="col-3">${v.tahun}</div>
            <div class="col-8 d-flex flex-column align-items-start">
                <span>${v.jurusan}</span>
                <h5 class="fw-bold">${v.strata}</h5>
            </div>
        </div>
        `
    })

    const myOrganization = document.querySelector('#wrapper-organisasi');
    data.data.nonformaleducation.forEach((v) => {
        // console.log(v)
        myOrganization.innerHTML += `
        <span class="ms-3  fs-5">${v.name}</span>
        `
    })



    const mySkills = document.querySelector('#my-skills');
    data.data.skills.forEach((v) => {
        // console.log(v)
        mySkills.innerHTML += `
        <div class="col-6 col-md-2 d-flex align-items-center">
            <img src="${v.source}" alt="${v.title}" class="badge-skill img-fluid w-100 p-3">
        </div>
        `
    })

    const myProjects = document.querySelector('#projects');
    data.data.projects.forEach((v) => {
        // console.log(v)
        myProjects.innerHTML += `
        <div class="card col-12 col-md-4">
            <div class="p-3 badge-card">
                <img src="${v.img}" class="img-fluid">
            </div>
            <div class="card-body">
                <span class="fw-bolder fs-5 text-capitalize">${v.title}</span>
                <p class=" fs-5">${v.deskripsi}</p>
                <div class="btn-wrapper mt-3">
                    <a href="${v.source}" class="btn btn-primary">View Demo</a>
                </div>
            </div>
        </div>
        `
    })
});