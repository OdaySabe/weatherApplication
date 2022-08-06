function Render(cityData, boolFromDataBase) {
  let temmManagerData = cityData;
  function render() {
    if (boolFromDataBase) {
      var source = $("#template").html();
    } else {
      var source = $("#template2").html();
    }
    const template = Handlebars.compile(source);
    const newHTML = template({
      data: temmManagerData,
    });
    $("#templatecontainer").append(newHTML);
  }
  function renderReplacing(element, Add) {
    if (Add) {
      $(element).replaceWith(
        `<i onclick=deleteCity(this) data-name=${$(element).data(
          "name"
        )} class="fa fa-minus-circle" style="font-size:34px;color: red;"></i>`
      );
    } else {
      $(element).replaceWith(
        `<i onclick=sendCity(this) ${$(element).data(
          "name"
        )} class="fa fa-plus-circle" style="font-size:34px;color: black;"></i>`
      );
    }
  }
  return {
    render: render,
    renderReplacing: renderReplacing,
  };
}
