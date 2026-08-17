// Interaksi 1: Ubah Warna Judul

const colorBtn = document.getElementById("colorBtn");
const title = document.getElementById("judul_web");

colorBtn.addEventListener("click", () => {

    if (title.style.color === "green") {
        title.style.color = "#2c3e50";
    } else {
        title.style.color = "green";
    }

});

// Interaksi 2: Show / Hide About

const toggleBtn = document.getElementById("toggleBtn");
const aboutSection = document.getElementById("about");

toggleBtn.addEventListener("click", () => {
    aboutSection.classList.toggle("hidden");
});

// Fetch API Geomapid

const loadBtn = document.getElementById("loadDataBtn");

loadBtn.addEventListener("click", getGeomapidData);

async function getGeomapidData() {

    const loading = document.getElementById("loading");
    const container = document.getElementById("cards-container");

    loading.innerHTML = "Loading data...";
    container.innerHTML = "";

    const url =
    "https://geoserver.mapid.io/layers_new/get_layer?api_key=7b8019aa264248e89e3fd5b27253132f&layer_id=69ace1b8643f7636a769ce7c&project_id=69ab9fb96c69e6252868efaf";

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        console.log(data);

        loading.innerHTML = "";

        container.innerHTML = `
            <div class="card">
                <h3>Data berhasil dimuat</h3>
                <p>Silakan cek Console (F12) untuk melihat struktur data API.</p>
            </div>
        `;

    } catch (error) {

        loading.innerHTML =
            '<span class="error">Gagal mengambil data API.</span>';

        console.error(error);
    }
}
`