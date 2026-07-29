# Cómo nos llega el dinero de los socios

Guía rápida para entender qué pasa desde que alguien se hace socio en la web hasta que el dinero está en la cuenta de la asociación.

---

## En una frase

Los socios pagan con tarjeta a través de **Stripe**, que es la pasarela de pago. Stripe va acumulando todo lo que se cobra durante el mes y, **una vez al mes**, hace una única transferencia a la cuenta bancaria de la asociación.

---

## El recorrido del dinero

El dinero hace dos saltos, no uno:

```
El socio paga  →  Saldo en Stripe  →  Transferencia a nuestro banco
   (día 1)         (durante el mes)      (una vez al mes)
```

Esto es lo que más confunde al principio: **si un socio paga hoy, ese dinero hoy NO está en la cuenta de la asociación.** Está retenido en Stripe y saldrá hacia el banco en la transferencia mensual.

No es que Stripe se lo quede: es su funcionamiento normal, igual que un TPV de tienda que liquida cada cierto tiempo.

---

## Cuándo llega

- Tenemos configurada la liquidación **mensual, el día 1 de cada mes**: Stripe hace **una sola transferencia** con todo lo cobrado.
- Un cobro necesita unos 2-3 días hábiles para estar "disponible". Por eso, **lo que se cobre en los últimos días del mes entra en la transferencia del mes siguiente**, no en la inmediata.
- **La primera transferencia tarda más de lo normal**, en torno a una semana adicional. Es un periodo de seguridad que Stripe aplica a todas las cuentas nuevas. No es un problema ni un error.
- **La transferencia en sí no cuesta nada.** Stripe no nos cobra comisión por liquidar. Lo que sí tiene comisión es cada cobro individual (ver más abajo), que es cosa distinta.

> **Si alguna vez hace falta el dinero antes del día 1**, nuestra cuenta tiene activadas las **transferencias instantáneas gratuitas**: desde el panel se puede lanzar un envío manual y el dinero llega en cuestión de minutos, sin coste. Es para casos puntuales; lo habitual es dejar que salga sola el día 1.

---

## Qué vamos a ver en el extracto bancario

Un único ingreso al mes, con un concepto parecido a:

```
STRIPE PAYOUT ............... 232,00 €
```

Ojo con esto:

- **No aparece el nombre de cada socio.** Es un importe agrupado.
- **El importe ya viene con las comisiones descontadas.** No hay que restar nada después.

---

## Cuánto llega de cada cuota

Aquí sí hay comisión. Que la transferencia mensual sea gratuita **no significa que el dinero llegue íntegro**: Stripe cobra por cada pago recibido, y lo descuenta antes de liquidar.

Sobre una cuota de socio de 5 €:

| Concepto | Importe |
|---|---|
| Lo que paga el socio | 5,00 € |
| Comisión de Stripe (1,5 % + 0,25 € fijos) | − 0,33 € |
| Suplemento por ser un pago recurrente (~0,5 %) | − 0,03 € |
| **Nos queda** | **≈ 4,64 €** |

Es aproximadamente un **7 %**. Parece mucho, y la razón son los **0,25 € fijos** que Stripe cobra por operación: en importes pequeños pesan mucho más que en grandes. En un donativo de 20 €, por ejemplo, nos quedan unos 19,45 € (un 3 %).

**Ejemplo con 50 socios:**

| | |
|---|---|
| Facturado en el mes | 250,00 € |
| Comisiones | ≈ − 18,00 € |
| **Ingreso en el banco** | **≈ 232,00 €** |

---

## Cómo cuadrar la transferencia con los socios

Cuando llegue el ingreso y haya que justificar de dónde sale:

1. Entra en el panel de Stripe → **Balance** → **Transferencias** (*Payouts*).
2. Busca la transferencia por su fecha e impórtate.
3. Al pincharla se despliega el **detalle pago a pago**: quién pagó, cuánto y qué comisión se llevó Stripe.
4. Hay un botón para **exportar a CSV** (se abre con Excel). Ese archivo es el justificante para la contabilidad.

En **Pagos** (*Payments*) están además los datos que pedimos en el formulario: nombre, teléfono, DNI/NIF y dirección de cada socio. De ahí sale el registro de socios.

---

## Qué conviene hacer cada mes

- Descargar el **CSV de la transferencia** y guardarlo junto al extracto bancario.
- Revisar si hay **pagos fallidos**: a veces una tarjeta caduca o no tiene fondos. Stripe lo reintenta solo varias veces, pero si acaba fallando conviene avisar a esa persona.
- Descargar la **factura de comisiones** de Stripe. Está en **Configuración → Documentos**. Es un gasto deducible y el gestor la va a pedir.

---

## Preguntas frecuentes

**¿Y si hay que devolverle el dinero a alguien?**
Se hace desde el panel de Stripe en dos clics. Importante: **Stripe no devuelve su comisión**. Si reembolsamos una cuota de 5 €, la asociación acaba perdiendo los ~0,36 € de comisión.

**¿Un socio puede darse de baja por su cuenta?**
Con la configuración actual, no directamente desde la web: tiene que escribirnos y lo cancelamos nosotros desde el panel. Se puede activar un portal de autogestión más adelante si vemos que hace falta.

**¿Los datos de las tarjetas pasan por nuestra web?**
No. El pago ocurre íntegramente en la página de Stripe. Nosotros no vemos ni guardamos ningún número de tarjeta, y por tanto no tenemos esa responsabilidad legal encima.

**¿Se puede reducir la comisión?**
Hay dos vías pendientes de explorar: activar la **domiciliación bancaria** (mucho más barata en cuotas pequeñas, porque no tiene comisión fija) y solicitar a Stripe la **tarifa para entidades sin ánimo de lucro**. Ninguna de las dos está activa ahora mismo.

---

## Dónde está cada cosa en el panel de Stripe

| Necesito... | Voy a... |
|---|---|
| Ver cuánto va acumulado este mes | **Balance** |
| El detalle de la transferencia recibida | **Balance → Transferencias** |
| Los datos de un socio concreto | **Pagos** o **Clientes** |
| Cancelar una suscripción | **Clientes** → buscar persona → Suscripciones |
| La factura de comisiones para el gestor | **Configuración → Documentos** |
| Adelantar una transferencia (instantánea) | **Balance → Transferir ahora** |
| Cambiar la cuenta bancaria o el calendario | **Configuración → Pagos** |

---

*Las comisiones indicadas son las tarifas estándar de Stripe España y pueden variar. Las condiciones reales de nuestra cuenta están siempre en Configuración → Facturación y tarifas.*
