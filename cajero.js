// Me falta hacerle la parte de que se actualicen los monstos de la caja
class Billete
{
  constructor(v, c, n)
  {
    this.imagen =new Image();
    this.valor = v;
    this.cantidad = c;
    this.nombre = n;

    this.imagen.src = imagenes[this.nombre];
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
  }
}
var imagenes = [];
imagenes["100"] = "100_opt.png";
imagenes["50"] = "50_opt.png";
imagenes["20"] = "20_opt.png";
imagenes["10"] = "10_opt.png";
imagenes["5"] = "5_opt.png";
imagenes["1"] = "1_opt.png";

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value); // extrae el valor de la caja de texto con .value

  for(var bi of caja)
  {
    if(dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);
      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
      papeles = div;
      }
      entregado.push( new Billete(bi.valor, papeles, bi.nombre) );
      dinero = dinero - (bi.valor * papeles);
    }
  }
  if(dinero > 0)
  {
    resultado.innerHTML = "Soy un cajero malo, he sido malo y no pudo darte esa cantidad de dinero =(";
  }
  else
  {
    for(var e of entregado)
    {
      if(e.cantidad > 0)
      {// lo de abajo que colocamos es igual a resultado.innerHTML = resultado.innerHTML + e.cantidad
      //e.mostrar()
          e.mostrar();
          resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
          //resultado2.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
          if(e.valor==100)
          {
          caja[0].cantidad= caja[0].cantidad - e.cantidad;
          }
          else if(e.valor==50)
          {
          caja[1].cantidad= caja[1].cantidad - e.cantidad;
          }
          else if(e.valor==20)
          {
          caja[2].cantidad= caja[2].cantidad - e.cantidad;
          }
          else if(e.valor==10)
          {
          caja[3].cantidad= caja[3].cantidad - e.cantidad;
          }
          else if(e.valor==5)
          {
          caja[4].cantidad= caja[4].cantidad - e.cantidad;
          }
          else if(e.valor==1)
          {
          caja[5].cantidad= caja[5].cantidad - e.cantidad;
          }
          else {
            document.write("no hay dinero");
          }
      }
    }

  }
}

var caja = [];
var entregado = [];
caja.push( new Billete(100, 10, "100") );
caja.push( new Billete(50, 10, "50") );
caja.push( new Billete(20, 10, "20") );
caja.push( new Billete(10,10, "10") );
caja.push( new Billete(5, 10, "5") );
caja.push( new Billete(1, 10, "1") );
var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var resultado2 = document.getElementById("resultado2");
var b = document.getElementById("extraer");
b.addEventListener("click",entregarDinero);
