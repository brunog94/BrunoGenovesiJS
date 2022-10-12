// funcion ciclo
var array = [
    {value: "og_cush", text: "Og Cush"},
    {value: "black_widow", text: "Black Widow"},
    {value: "blue_dream", text: "Blue Dream"},
    {value: "jack_herer", text: "Jack Herer"},
    {value: "gorilla_glue", text: "Gorilla Glue"}
];

var select = document.getElementById('sepas'),
    i = 0,
    il = array.length;

for (i; i < il; i ++) {
  option = document.createElement('option');
  option.setAttribute('value', array[i].value);
  option.appendChild(document.createTextNode(array[i].text));
  select.appendChild(option);
}

// funcion condicional
var precio =  document.getElementById('precio');

document.getElementById('sepas').addEventListener('change', function() {
  var sepa =  this.value;

  if (sepa == 'og_cush'){
    precio.value = '1200';
  }else if (sepa == 'black_widow'){
    precio.value = '1400';
  }else if (sepa == 'blue_dream'){
    precio.value = '1500';
  }else {
    precio.value = '1100';
  }
});
