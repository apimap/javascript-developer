export function saveToFile(dataobj, filename) {
    dataobj["api catalog version"] = "1";
    if (!Array.isArray(dataobj.data.documentation) && dataobj.data.classifications === undefined) {
        dataobj.data.documentation = [dataobj.data.documentation];
    }

    const data = JSON.stringify(dataobj, null, 2);
    const blob = new Blob([data], {type: "text/plain"});
    const e = document.createEvent("MouseEvents");
    const a = document.createElement("a");
    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
    e.initEvent(
        "click",
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
    );
    a.dispatchEvent(e);
}