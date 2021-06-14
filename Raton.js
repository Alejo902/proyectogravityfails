class Raton extends Enemigo {
  constructor(x, y, dir) {
    super(x, y, dir);
  }

  mostrar() {
    image(raton, this.x, this.y);
  }
  verificarImpacto() {
    // además de marcarlo como muerto... retorna el valor para usarlo
    if (
      this.x > personaje.x &&
      this.x < personaje.x + 78 &&
      this.y > personaje.y &&
      this.y < personaje.y + 117
    ) {
      console.log("entro");
      this.muerto = true; // muere cuando lo tocan no?
      return true;
    }
    return false;
  }

  estaMuerto() {
    return this.muerto;
  }
}
