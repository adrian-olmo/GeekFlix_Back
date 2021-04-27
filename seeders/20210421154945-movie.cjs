'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Movies', [
      {
        title: "Mortal Kombat",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg",
        overview: "Un boxeador fracasado descubre un secreto familiar que lo lleva a un torneo místico llamado Mortal Kombat donde se encuentra con un grupo de guerreros que luchan hasta la muerte para salvar los reinos del malvado hechicero Shang Tsung."
      },
      {
        title: "Godzilla vs Kong",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/bnuC6hu7AB5dYW26A3o6NNLlIlE.jpg",
        overview: "Godzilla y Kong, dos de las fuerzas más poderosas de un planeta habitado por todo tipo de aterradoras criaturas, se enfrentan en un espectacular combate que sacude los cimientos de la humanidad. Monarch (Kyle Chandler) se embarca en una misión de alto riesgo y pone rumbo hacia territorios inexplorados para descubrir los orígenes de estos dos titanes, en un último esfuerzo por tratar de salvar a dos bestias que parecen tener las horas contadas sobre la faz de la Tierra."
      },
      {
        title: "Nadie",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/uuFrRLw3i5cpJZMhiOjo5piZ0tj.jpg",
        overview: "Hutch Mansell, un padre de familia que aguanta con resignación y sin defenderse los golpes de la vida. Un don nadie.  Una noche, cuando dos ladrones entran en su casa, Hutch decide no actuar y no trata de defenderse ni al él mismo ni a su familia, convencido de que solo así evitará una escalada de violencia. Tras el ataque, su hija adolescente Blake no oculta su decepción, y su esposa Becca se aleja todavía más."
      },
      {
        title: "La Liga de la Justicia de Zack Snyder",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/rkuvJnamPl3xW9wKJsIS6qkmOCW.jpg",
        overview: "Con la determinación de asegurar que el sacrificio definitivo de Superman no fue en vano, Bruce Wayne une fuerzas con Diana Prince para reclutar a un equipo de metahumanos que protejan el mundo de una amenaza inminente de proporciones catastróficas. La tarea es más difícil de lo que Bruce imaginaba, ya que cada uno de los reclutas deberá enfrentarse a sus propios demonios para trascender aquello que los detenía, para unirse y formar de manera definitiva una liga de héroes sin precedentes. Ahora unidos, Batman, Wonder Woman, Aquaman, Cyborg y Flash deberán salvar al planeta de la amenaza de Steppenwolf, DeSaad y Darkseid, antes de que sea demasiado tarde."
      },
      {
        title: "Patrulla Trueno",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/e9r4aLl7OAXdGK49u5oEjlbHKA3.jpg",
        overview: "En un mundo en el que los supervillanos son algo común, dos amigas de la infancia distanciadas se reúnen después de que una de ellas idee un tratamiento que les da superpoderes para proteger su ciudad."
      },
      {
        title: "The Marksman (El protector)",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/ncnZa574KFkSRrwPpxbyRoIrteW.jpg",
        overview: "Un ranchero en la frontera de Arizona se convierte en el improbable defensor de un joven mexicano que huye desesperadamente de los asesinos del cartel que lo han perseguido hasta Estados Unidos."
      },
      {
        title: "Chaos Walking",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/idQDWn8Yhl4zXLwpyHKlr3NXYO9.jpg",
        overview: "Todd Hewitt es el último chico de Prentisstown, una pequeña comunidad cuya peculiaridad (aparte del hecho de que no hay mujeres) es que todos escuchan los pensamientos ajenos, lo que es definido como Ruido, un ruido que nunca cesa. Todd está contento porque sólo falta un mes para que sea su decimotercer cumpleaños y por fin, se convierta en hombre. Pero entonces, en uno de sus paseos por el bosque con su fiel perro, encuentra algo inesperado que cambiará su mundo para siempre: el silencio. O como lo define Todd: un agujero en el ruido."
      },
      {
        title: "Raya y el último dragón",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/yHpNgjEXzZ557YiZ2r3VrKid788.jpg",
        overview: "Raya, una niña de gran espíritu aventurero,  se embarca en la búsqueda del último dragón del mundo con el objetivo de devolver el equilibrio a Kumandra, un lejano y recóndito territorio habitado por una civilización milenaria."
      },
      {
        title: "Ruega por nosotros",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/hPoOn553ARmSQl0ChKTlGDvYq9x.jpg",
        overview: "Se centra en un periodista caído en desgracia que descubre una serie de aparentes milagros acaecidos en un pequeño pueblo de Nueva Inglaterra, aplicándolos para devolver su carrera al estrellato. Lo que desconoce es que estos milagros esconden una cara mucho más oscura de lo que él cree."
      },
      {
        title: "Mortal Kombat Legends: La venganza de Scorpion",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/sqBl12v4AXVoc5PmeGnd8oZ7HHY.jpg",
        overview: "Basado en el popular videojuego creado por Ed Boon y John Tovias, Mortal Kombat Legends: Scorpion’s Revenge pone el foco en un torneo único que se celebra una vez por generación y en el que se enfrentan los campeones de distintos reinos. El ganador determinará el destino de la Tierra y de sus habitantes."
      },
      {
        title: "Monster Hunter",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/dZOYV74OQsmBkoKPIRu0n1sYHZb.jpg",
        overview: "Tras nuestro mundo hay otro: un mundo de monstruos peligrosos y poderosos que gobiernan sus dominios con una ferocidad mortal. Cuando la teniente Artemis y sus leales soldados son transportados de nuestro mundo al nuevo mundo, la imperturbable teniente recibe el golpe de su vida. En su desesperada batalla por sobrevivir contra enormes enemigos con poderes increíbles y ataques imparables y repugnantes, Artemis se unirá a un hombre misterioso que ha encontrado la forma de defenderse."
      },
      {
        title: "Guardianes de la noche - Kimetsu no Yaiba - La película: Tren Infinito",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/3f4ETSwknZs74lmUYC7ENIMRBMP.jpg",
        overview: "Tanjiro y sus compañeros se unen al Pilar de las Llamas Kyojuro Rengoku para investigar una misteriosa serie de desapariciones que han ocurrido dentro del “Tren Infinito”. Poco saben que Enmu, uno de los miembros de las Doce Lunas Demoníacas, también está a bordo y les ha preparado una trampa."
      },
      {
        title: "Nezha: El renacer de un dios",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/iyOgNaaDX67AUMWlzsGZVO1luoh.jpg",
        overview: "La historia tiene lugar tres mil años después de \"Nezha nao hai\". Nezha nace de nuevo ¿Qué desafíos enfrentará en esta vida? Un nuevo superhéroe está naciendo en silencio..."
      },
      {
        title: "Tom y Jerry",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/orzPlWUbf0S5HeWmpP3TeHvduwn.jpg",
        overview: "Tom el gato y Jerry el ratón son expulsados de su casa y se trasladan a un elegante hotel de Nueva York, donde una empleada descuidada llamada Kayla perderá su trabajo si no puede desalojar a Jerry antes de una boda de clase alta en el hotel. ¿Su solución? Contratar a Tom para deshacerse del molesto ratón."
      },
      {
        title: "Barrenderos espaciales",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/eQyi0oEk0WtkiWJxPi58M53Crzv.jpg",
        overview: "En 2092, la tripulación de una nave basurero espacial llama Victory descubre un robot humanoide llamado Dorothy, un arma de destrucción masiva, y se ven envueltos en un negocio de alto riesgo."
      },
      {
        title: "A descubierto",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/bQ2aNqcIGopI2AsTREc8sQlz6CN.jpg",
        overview: "Un piloto de drones se une a un oficial androide para localizar un dispositivo que amenaza con acabar con la vida sobre el planeta. El dispositivo en cuestión se encuentra oculto en una zona altamente militarizada."
      },
      {
        title: "Wonder Woman 1984",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/oG8rC5WEUFEMsMeBLGJWspJ1Gp5.jpg",
        overview: "En 1984, en plena guerra fría, Diana Prince, conocida como Wonder Woman se enfrenta al empresario Maxwell Lord y a su antigua amiga Barbara Minerva / Cheetah, una villana que posee fuerza y agilidad sobrehumanas."
      },
      {
        title: "Cherry",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/pwDvkDyaHEU9V7cApQhbcSJMG1w.jpg",
        overview: "Cuenta la historia real de Nico Walker, que volvió de la guerra de Iraq con un trastorno de estrés postraumático no diagnosticado que le llevó primero a hacerse adicto al opio y posteriormente a robar bancos."
      },
      {
        title: "Centinela",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/oz60oMLIyZfkww0y4AiZ5uTNRqL.jpg",
        overview: "Enviada a casa tras una traumática misión de combate, una soldado francesa de élite usa sus habilidades letales para dar caza al hombre que agredió a su hermana."
      },
      {
        title: "Noche en el paraíso",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/mWZ2aujwBdFEONvRQv05zPBGy7J.jpg",
        overview: "Un gángster intenta limpiar su vida para cuidar a su hermana y sobrino enfermos. Pero alguien que lo apuntaba accidentalmente los mata en su lugar. En estado de shock, decide vengarse."
      },
      {
        title: "Bajocero",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/340AAxjvtGXChWkqhIlScZTSokq.jpg",
        overview: "Invierno. Bajo cero. Noche cerrada. En mitad de una carretera despoblada, un furgón blindado es asaltado durante un traslado de presos. Alguien busca a uno de los presos y no parará hasta sacarlo. Su plan no tiene fisuras, no le importan las consecuencias, nada le va a detener. Pero Martín, el conductor del furgón, consigue atrincherarse dentro del cubículo blindado con los reclusos, convirtiéndose en su único obstáculo. Obligado a entenderse con sus enemigos naturales, Martín tratará de sobrevivir y cumplir con su deber en una larga noche de pesadilla que acabará haciendo que ponga en duda todos sus principios."
      },
      {
        title: "Twist",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/h3oT6lZcYC2khtZnzHBgqthj5W.jpg",
        overview: "Un clásico de Dicken actualizado de forma emocionante en el corazón del Londres moderno, donde un grupo de jóvenes estafadores inteligentes planean el atraco del siglo para el mejor día de pago."
      },
      {
        title: "Abismo",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/tA3k9LyE2togmIuNnOgw6SmzWus.jpg",
        overview: "La película sigue a una pareja amante de la aventura, que convence a sus amigos para explorar un sistema de cuevas en un alejado bosque del norte de Australia. Con una tormenta acercándose, se precipitan a la boca de la cueva, la cual comienza a inundarse, lo que implica que se verán amenazados por una manada de hambrientos cocodrilos..."
      },
      {
        title: "Miraculous World: Las aventuras de Ladybug en Nueva York",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/kIHgjAkuzvKBnmdstpBOo4AfZah.jpg",
        overview: "Ladybug al lado de sus amigos, son enviados a la universidad de Nueva York con una finalidad, celebrar la Semana de la Amistad Franco-Americana, pero no cuentan con que se toparán con superhéroes estadounidenses que les cambiarán la estadía."
      },
      {
        title: "Alerta roja",
        year: "2019",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/A3BP44EvnJIIhyNVwPT0IpvNAoc.jpg",
        overview: "El volcán en la montaña Baekdu hace erupción repentinamente, causando varios terremotos tanto en Corea del Norte como en el Sur. El caos reina en la península de Corea cuando se predicen más erupciones. Para prevenir un desastre mayor, Jeon Yoo-kyung (Jeon Hye-jin) planea una operación basada en la teoría del profesor Kang Bong-rae (Ma Dong-seok), quien ha estudiado la montaña Baekdu y sus posibles erupciones. Jo In-chang (Ha Jung-woo) es el capitán del equipo de fuerzas especiales y es asignado a la operación que mantiene el destino de ambas Coreas en la balanza. Él contacta a Lee Joon-pyeong (Lee Byung-hun), un espía norcoreano para realizar la operación conjuntamente. Mientras, su esposa embarazada, Choi Ji-young (Bae Suzy), está sola en Seúl intentando sobrevivir en medio del desastre."
      },
      {
        title: "Pequeños detalles",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/j62o61KqXrYeThdmNOtm3UplUSl.jpg",
        overview: "Joe 'Deke' Deacon, ayudante de sheriff del condado de Kern, es enviado a Los Angeles para lo que debería ser un caso rápido de recopilación de evidencias. Sin embargo, se ve involucrado en la búsqueda de un asesino en serie que aterroriza a la ciudad. Encabezando la investigación se encuentra el sargento del departamento del sheriff de Los Angeles, Jim Baxter, quien, impresionado por el instinto policial de Deke, le ayuda de manera extraoficial. Pero mientras siguen la pista al asesino, Baxter desconoce que la investigación desentierra partes del pasado de Deke que sacan a la luz secretos más peligrosos que el propio caso."
      },
      {
        title: "Un mal viaje",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/jxGuDeH1nVwwY9fgahRPVqayI1b.jpg",
        overview: "Dos amigos se embarcan en un viaje por carretera a través del país haciendo bromas con cámara oculta a la gente."
      },
      {
        title: "Los Croods: Una nueva era",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/5uMWKEmegf5aTJnp1u98JF4QerP.jpg",
        overview: "Después de salir de su cueva, los Croods se encuentran con su mayor amenaza desde que se fueron: otra familia llamada Betterman, quienes afirman y demuestran ser mejores y evolucionados. Grug empieza a sospechar de los padres de Betterman, Phil y Hope, ya que planean en secreto separar a su hija Eep con su amado novio Guy para asegurarse de que su hija Dawn tenga un compañero amoroso e inteligente que la proteja."
      },
      {
        title: "Punto rojo",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/q2KhGQQXdunhiJZuuIxGu27rji.jpg",
        overview: "Cuando Nadja queda embarazada, tanto ella como su pareja intentan reconducir su relación viajando al norte de Suecia para practicar montañismo. Sin embargo, su escapada romántica no tarda en convertirse en una auténtica pesadilla."
      },
      {
        title: "Wrong Turn",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/4U1SBHmwHkNA0eHZ2n1CuiC1K1g.jpg",
        overview: "Jen y un grupo de amigos se dispusieron a caminar por el sendero de los Apalaches. A pesar de las advertencias de que se adhieran al sendero, los excursionistas se desvían del rumbo y se adentran en tierras habitadas por The Foundation, una comunidad oculta de habitantes de las montañas que utilizan medios letales para proteger su forma de vida. De repente, bajo asedio, Jen y sus amigos parecen dirigirse al punto sin retorno, a menos que el padre de Jen pueda llegar a tiempo."
      },
      {
        title: "Vanguard",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/mCYN3bccjOG0w857JTf5UOKsPEH.jpg",
        overview: "Vanguard, una compañía de guardaespaldas, es la última esperanza de supervivencia para un contable que es perseguido por la organización de mercenarios más peligrosa del planeta."
      },
      {
        title: "Tentacles",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/kBKKXVbVwIP81u8Bnhguux48Sdn.jpg",
        overview: "Tara (Dana Drori) y Sam (Casey Deidrick) son una pareja locamente enamorada que comparte absolutamente todo en sus vidas, algo que cambiará para siempre su intimidad... de una forma terrorífica."
      },
      {
        title: "Silk Road",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/6KxiEWyIDpz1ikmD7nv3GTX4Uoj.jpg",
        overview: "Relata la historia de Ross Ulbricht, creador de \"Silk Road\", una página web de la darknet dedicada a la venta y tráfico de estupefacientes."
      },
      {
        title: "Aquaslash",
        year: "2019",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/wB8qqLIaYDkYEnjbS5hAJiTuYU6.jpg",
        overview: "Emociones, escalofríos y comedia deslumbrante se encuentran con pequeños bikinis y un desmembramiento sangriento, en estos misteriosos asesinatos empapados en cloro y sangre."
      },
      {
        title: "Solo di que sí",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/80CVQssUAbU2Q5w9jApzKEmtoLy.jpg",
        overview: "La romántica incurable Lotte (Yolanthe Cabau) ha estado planeando su boda perfecta durante años, pero ve cómo su sueño se hace añicos cuando el novio decide cancelarla en el último minuto."
      },
      {
        title: "Soul",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/gI9oVLHXgPYidW2W4A7p1pYW9QB.jpg",
        overview: "¿Alguna vez te has preguntado de dónde provienen tu pasión, tus sueños y tus intereses? ¿Qué es lo que te hace ser... tú? Viaja desde las calles de Nueva York a los reinos cósmicos para descubrir las respuestas a las preguntas más importantes de la vida."
      },
      {
        title: "Arlo, el chico caimán",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/oOQMJM7G2W8v2AEK722k8welIJY.jpg",
        overview: "Para encontrar a su padre, al que nunca conoció, el optimista Arlo deja su pantanoso hogar en el Sur y parte hacia Nueva York, haciendo amigos en el camino."
      },
      {
        title: "Jiu Jitsu",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg",
        overview: "Cada seis años, una antigua orden de luchadores de jiu-jitsu une fuerzas para luchar contra una feroz raza de invasores alienígenas. Pero cuando un célebre héroe de guerra cae derrotado, el destino del planeta y la humanidad está en juego."
      },
      {
        title: "Amenaza en el espacio",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/13B6onhL6FzSN2KaNeQeMML05pS.jpg",
        overview: "Un rudo mecánico es elegido para estar despierto y dar mantenimiento al arca interestelar de una nave espacial que mantiene con vida a unos pocos miles de supervivientes de una Tierra moribunda. El peligro llega cuando un alien capaz de cambiar de forma aparece en la nave para acabar con todos los supervivientes."
      },
      {
        title: "Skylines",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/2W4ZvACURDyhiNnSIaFPHfNbny3.jpg",
        overview: "Cuando un virus amenaza con convertir a los híbridos alienígenas amistosos que ahora habitan la tierra en contra de los humanos, la capitana Rose Corley debe liderar un equipo de mercenarios de élite en una misión al mundo alienígena para salvar lo que queda de la humanidad."
      },
      {
        title: "Aves de presa (y la fantabulosa emancipación de Harley Quinn)",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/1wLqXiiiaTSK8Y0n7N85O0jaNJm.jpg",
        overview: "Después de separarse del Joker, Harley Quinn y otras tres heroínas (Canario Negro, Cazadora y Renée Montoya) unen sus fuerzas para salvar a una niña del malvado rey del crimen, Máscara Negra."
      },
      {
        title: "Bad Boys for Life",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/ur1wCiFEwZzjehqQM11FFN66rwL.jpg",
        overview: "El Departamento de Policía de Miami y su equipo de élite AMMO intentan derribar a Armando Armas, jefe de un cartel de la droga. Armando es un asesino de sangre fría con una naturaleza viciosa y contaminante. Él está comprometido con el trabajo del cartel y es enviado por su madre Isabel, para matar a Mike."
      },
      {
        title: "Ava",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg",
        overview: "Ava es una mortífera asesina a sueldo que trabaja para una organización de operaciones encubiertas, que viaja por todo el mundo acabando con aquellos objetivos que nadie más puede derribar. Cuando uno de sus encargos sale mal, Ava tendrá que luchar por una vida."
      },
      {
        title: "Un ladrón honesto",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/9Kee2stO6c2JLgH2Q2ek67H7QTB.jpg",
        overview: "Un atracador de bancos se entrega a la policía porque se ha enamorado y decide llevar una vida honrada. Cuando descubre que los federales son aún más corruptos que él, se verá obligado a utilizar todas sus artimañas de ex marine para limpiar su nombre."
      },
      {
        title: "Agencia Secreta de Control Mágico",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/B3Xz48iyIh9ejffVtfCxwzTO7n.jpg",
        overview: "La Agencia del Control de Magia envía a sus dos mejores agentes, Hansel y Gretel, a luchar contra la bruja de la Casa del Pan de Jengibre."
      },
      {
        title: "El rey de Zamunda",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/jJFvY25lPaKlapYOeIH6N5aKcbh.jpg",
        overview: "¡Akeem y Senmi han vuelto! Desde el exuberante reino de Zamunda, el recién coronado rey Akeem (Eddie Murphy) y su leal confidente Semmi (Arsenio Hall) emprenden una nueva y divertidísima aventura que les hará atravesar el mundo, desde su gran país en África hasta el barrio de Queens, en Nueva York, donde todo empezó."
      },
      {
        title: "Fear of Rain",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/b2shaNA4F8zNIwoRYr33lPTiFfl.jpg",
        overview: "Una adolescente que vive con esquizofrenia comienza a sospechar que su vecino ha secuestrado a un niño. Sus padres tratan desesperadamente de ayudarla a vivir una vida normal, sin exponer sus propios secretos trágicos, y la única persona que la cree es Caleb, un niño del que ni siquiera está segura de que exista."
      },
      {
        title: "Tenet",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/buSr2RIxzJ5Zh6dLaLBsqAdvz3I.jpg",
        overview: "Armado solamente con una palabra, Tenet, el protagonista deberá luchar por la supervivencia del mundo entero y evitar la Tercera Guerra Mundial, en una historia de espionaje internacional. La misión se desplegará más allá del tiempo real. No son viajes en el tiempo, es inversión."
      },
      {
        title: "The Unfamiliar",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/g7Bxg2j7nbCpKo7U0j1jwU79XPY.jpg",
        overview: "Un médico del ejército británico regresa de una guerra, pensando que tiene PTSD solo para descubrir que hay una malevolencia más desalentadora en el trabajo que hace que la vida que conocía le resulte desconocida."
      },
      {
        title: "El robo del siglo",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/acQ5lwnQGwre8n3m8JzTTcNKc5h.jpg",
        overview: "Viernes 13 de enero de 2006. Los francotiradores del Grupo Halcón están a la espera de una orden. Miguel Sileo, el negociador, deja diluir las esperanzas de que Vitette, uno de los líderes de la banda de ladrones que entró a la sucursal del Banco Río de Acassuso de señales de vida. El grupo Halcón recibe la orden y entra: se encuentran con lo inesperado. Armas de juguete y una veintena de rehenes asustados los esperan dentro; no hay señales del grupo de ladrones. Mientras revisan a los rehenes para descubrir a los artífices del robo camuflados entre ellos, la policía va descubriendo que, más de la mitad de las cajas de seguridad fueron abiertas y vaciadas."
      },
      {
        title: "Bloodshot",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/b0Sokh7DazDAxGOpt0ln9soTTET.jpg",
        overview: "Ray Garrison, también conocido como Bloodshot, es resucitado por la compañía Rising Spirit Technologies a través del uso de nanotecnología. Mientras lucha por recuperar la memoria, Ray trata de volver a ser el que era antes de sufrir el accidente que le dejaría amnésico. Película basada en el cómic \"Valiant\", creado por Kevin VanHook, Don Perlin y Bob Layton."
      },
      {
        title: "My Hero Academia: el despertar de los héroes",
        year: "2019",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/vH5stD5pTogbZVXadIKQyMSKzTt.jpg",
        overview: "Un nuevo villano, llamado Nine, está buscando a Tomura Shigaraki. Para ello, decide atacar la isla de Nabutō. Segunda película de la serie anime \"My Hero Academia\"."
      },
      {
        title: "Tyler Rake",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/1bYcM4KH5jncH99a2JvXd3yYdNs.jpg",
        overview: "Tyler Rake, un intrépido mercenario que ofrece sus servicios en el mercado negro, emprende una peligrosa misión cuando es contratado para rescatar al hijo secuestrado de un señor del crimen de Bombay."
      },
      {
        title: "Evangelion: 3.0+1.0",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/9aaeMoB9v9f4jriQwk0anrBpqtn.jpg",
        overview: "Cuarta y última película de la tetralogía Rebuild of Evangelion."
      },
      {
        title: "After: En mil pedazos",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/8nPw22C41EUWXREWmY9iIivMXxm.jpg",
        overview: "Ha pasado el tiempo, y Hardin todavía no se sabe si es realmente el chico profundo y reflexivo del que Tessa se enamoró, o ha sido un extraño todo este tiempo. Ella quiere alejarse, pero no es tan fácil. Tessa se ha centrado en sus estudios y comienza a trabajar como becaria en Vance Publishing. Allí conoce a Trevor, un nuevo y atractivo compañero de trabajo que es exactamente el tipo de persona con la que debería estar. Pero Hardin sabe que cometió un error, posiblemente el más grande de su vida y quiere corregir sus errores y vencer a sus demonios."
      },
      {
        title: "La Momia asciende",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/tmghT8HaddVIS9hEXIOI9GuDchi.jpg",
        overview: "Un grupo de estudiantes de arqueología despierta una momia antigua. Después de quedar atrapados en un bucle temporal, la única forma de escapar es derrotar a la momia. A medida que aumenta el recuento de cadáveres, parece que la Momia tiene que recolectar las almas de quienes lo despertaron para poder caminar por la tierra, para siempre."
      },
      {
        title: "Contigo a muerte",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/1A7SVcEDqaTFKgzQV3ctb7g0pu9.jpg",
        overview: "Su esposo abusivo ha muerto a manos de una amiga lesbiana que haría cualquier cosa por ella. Ahora huyen para ponerse a salvo."
      },
      {
        title: "Fast & Furious: Hobbs & Shaw",
        year: "2019",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/5REralbYRALUnTpICY3TBMyXYGW.jpg",
        overview: "Desde que Hobbs, agente del Servicio de Seguridad Diplomática de Estados Unidos, y el británico Shaw, proscrito sin ley, se enfrentaron por primera vez, solo han intercambiado bofetadas y malas palabras. Pero cuando las despiadadas acciones de Brixton, un anarquista cibergenéticamente mejorado, amenazan el futuro de la humanidad, ambos se unen para derrotarlo."
      },
      {
        title: "Otra forma de vencer",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/AoWY1gkcNzabh229Icboa1Ff0BM.jpg",
        overview: "Victoria es una madre joven que intenta dejar atrás su oscuro pasado como mensajero de drogas ruso, pero el policía retirado Damon obliga a Victoria a cumplir sus órdenes al mantener a su hija como rehén. Ahora, Victoria debe usar armas, agallas y una motocicleta para acabar con una serie de gánsteres violentos, o tal vez nunca vuelva a ver a su hijo."
      },
      {
        title: "Dragonheart: Vengeance",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/mPGAlXyPH21qg38GF1Ydd0xDg7B.jpg",
        overview: "Lukas, un joven agricultor cuya familia es asesinada por salvajes guerreros, se embarca en una aventura épica en busca de venganza, formando un trío imposible con un dragón majestuoso y un mercenario espadachín llamado Darius."
      },
      {
        title: "Ruega por nosotros",
        year: "2019",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/qmIE6PwIA9a5fkB1mn9hdtpOUa5.jpg",
        overview: 1
      },
      {
        title: "Assassin 33 A.D.",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/8jDvtdH327I8TgX3UPdkAsZF1dA.jpg",
        overview: "Mientras investigaban, un grupo de jóvenes genios se topó accidentalmente con un plan terrorista secreto para crear una máquina del tiempo para retroceder en el tiempo y cambiar la historia."
      },
      {
        title: "Legionnaires Trail",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/6ssoBXQOxNhrsGJoM6Tcvm57V79.jpg",
        overview: "A Noreno, medio romano, se le confía la misión de cruzar las montañas nevadas de Armenia, plagado de patrullas partas, para buscar ayuda para sus hombres que mueren lentamente."
      },
      {
        title: "Guerra de Likes",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/gewQlwxgqo595Pw25lwaPfI4h5D.jpg",
        overview: "Una conocida influencer llega a la conclusión de que su exitosa vida es solo una ilusión por lo que trata de modificar la forma de llevarla."
      },
      {
        title: "Breaking News in Yuba County",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/pMyCYtgfBmMisX3RFc5eH6zIV5Y.jpg",
        overview: "Un empujador de lápices pasado por alto sorprende a su marido en la cama con otra mujer, cuya conmoción le hace morir de un infarto. Entonces ella entierra su cuerpo y se aprovecha del creciente estatus de celebridad que proviene de tener un esposo desaparecido. Pero rápidamente se encuentra en un lío, esquivando policías y criminales, todo mientras trata de ocultar la verdad a su hermana, una presentadora de noticias local que está desesperada por una historia."
      },
      {
        title: "The Tax Collector",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/bHke4PS5Whg0pz6dDWhzAmwvEr8.jpg",
        overview: "David Cuevas es un hombre de familia que trabaja como recaudador de impuestos de los pandilleros de alto rango de Los Ángeles. Hace colecciones en toda la ciudad con su compañero Creeper asegurándose de que las personas paguen o vean represalias. Una vieja amenaza regresa a Los Ángeles que pone en peligro todo lo que David ama."
      },
      {
        title: "Joker",
        year: "2019",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/v0eQLbzT6sWelfApuYsEkYpzufl.jpg",
        overview: "Arthur Fleck es un hombre ignorado por la sociedad, cuya motivación en la vida es hacer reír. Pero una serie de trágicos acontecimientos le llevarán a ver el mundo de otra forma. Película basada en Joker, el popular personaje de DC Comics y archivillano de Batman, pero que en este film toma un cariz más realista y oscuro."
      },
      {
        title: "La Funeraria",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/1rlgIzw129hEl46bFaJZ7wpEEZZ.jpg",
        overview: "La muerte no es algo extraño para Bernardo, su esposa Estella y su hijastra Irina, ya que regentan una funeraria. Pero una cosa son los cadáveres inertes y otra muy distinta los espíritus que vagan por el lugar y que fuerzan a la familia a limitar los espacios de la casa por los que pueden transitar. La mayoría son presencias tétricas pero inofensivas, hasta que un día se hace evidente que hay algo entre las sombras que realmente quiere hacerles daño..."
      },
      {
        title: "Occidente",
        year: "2019",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/6Bp5EyQCunRumsswNyw9FzWM5Ji.jpg",
        overview: "Un director de cine fugitivo en el exilio, llamado H, regresa a la ciudad industrial de la que huyó en el pasado, en un tiempo y lugar desconocidos. Gloria, la mujer trabajadora que amó y dejó atrás vive sometida a la rutina. Pero H, incapaz de adaptarse, la convence para que huyan juntos a un lugar que nadie recuerda fuera de la civilización."
      },
      {
        title: "100% Wolf: Pequeño gran lobo",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/4fJcKIBQ5Enwo47lKqI2bMGboQ5.jpg",
        overview: "Freddy Lupin pertenece a una orgullosa familia de hombres lobo. Confiado de que pronto se convertirá en un hombre lobo de los más temidos, Freddy se queda sorprendido cuando descubre que no es todo lo feroz que esperaba."
      },
      {
        title: "Miraculous World Shanghai, la légende de Ladydragon",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/tf9nWFyJ745mBFkXZtPWabDYBR3.jpg",
        overview: "Para unirse a Adrien en Shanghai, Marinette va a visitar a su tío Wang, quien celebra su cumpleaños. Pero tan pronto como llega a China, ¡le roban su bolso con Tikki!, lo que no le permite convertirse en una Ladybug en secreto! Privada y sola en la gran ciudad, Marinette acepta la ayuda de una joven muy ingeniosa, Fei. Las dos chicas se harán amigas y descubrirán la existencia de una nueva joya mágica, los Prodigios, que Hawk Moth, también presente en Shanghai, ha estado buscando durante mucho tiempo..."
      },
      {
        title: "Bob Esponja: Un héroe al rescate",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/fi2pg2mtAZwhq3qVuAs6PztjnHT.jpg",
        overview: "Cuando desaparece su amigo Gary, Bob Esponja se embarca en una alocada misión con Patricio muy lejos de Fondo de Bikini para rescatarlo."
      },
      {
        title: "The Doorman",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/pklyUbh4k1DbHdnsOMASyw7C6NH.jpg",
        overview: "Un ex marine convertido en portero en un lujoso rascacielos de la ciudad de Nueva York debe ser más astuto y luchar contra un grupo de ladrones de arte y su despiadado líder, mientras lucha por proteger a la familia de su hermana. A medida que los ladrones se vuelven cada vez más desesperados y violentos, el portero recurre a sus habilidades de lucha letales para poner fin al enfrentamiento."
      },
      {
        title: "Alone (Sola)",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/n9OzZmPMnVrV0cMQ7amX0DtBkQH.jpg",
        overview: "Una mujer viuda que viaja sola es secuestrada por un asesino a sangre fría. Cuando logra escapar de su captor no tendrá solo que evitar que éste la descubra, sino también que luchar contra los elementos de la naturaleza."
      },
      {
        title: "Vengadores: Infinity War",
        year: "2018",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/ksBQ4oHQDdJwND8H90ay8CbMihU.jpg",
        overview: "El todopoderoso Thanos ha despertado con la promesa de arrasar con todo a su paso, portando el Guantelete del Infinito, que le confiere un poder incalculable. Los únicos capaces de pararle los pies son los Vengadores y el resto de superhéroes de la galaxia, que deberán estar dispuestos a sacrificarlo todo por un bien mayor. Capitán América e Ironman deberán limar sus diferencias, Black Panther apoyará con sus tropas desde Wakanda, Thor y los Guardianes de la Galaxia e incluso Spider-Man se unirán antes de que los planes de devastación y ruina pongan fin al universo. ¿Serán capaces de frenar el avance del titán del caos?"
      },
      {
        title: "Nomadland",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/6CFE3b0iHmv3m2cRrmBXHIP2vhv.jpg",
        overview: "Una mujer de unos sesenta años se embarca en un viaje por el oeste de los Estados Unidos después de perderlo todo en la Gran Recesión, viviendo como una nómada moderna que vive en una furgoneta."
      },
      {
        title: "Mortal Kombat",
        year: "1995",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/fcK7tzSSXMYiMN8E9KlZJL1BYyp.jpg",
        overview: "Durante nueve generaciones, Shang Tsung, un brujo malvado, ha llevado a un poderoso príncipe a la victoria contra sus mortales enemigos. Si vence el décimo torneo Mortal Kombat, la desolación y el mal que han florecido en el mundo exterior reinarán la Tierra por siempre."
      },
      {
        title: "Host",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/h7dZpJDORYs5c56dydbrLFkEXpE.jpg",
        overview: "Seis amigos realizan una sesión espiritista por Zoom durante la cuarentena, lo que les lleva a vivir una serie de aterradoras experiencias. Cuando un espíritu maligno invade sus casas, comienzan a preguntarse qué es lo que pueden hacer para sobrevivir a la noche."
      },
      {
        title: "¡Scooby-Doo! La Espada y Scooby",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/jOMK2YFKtzXGTm0tedsurDj5pFh.jpg",
        overview: "Una hechicera malvada transporta a la pandilla a la era de los caballeros caballerosos, los magos lanzadores de hechizos y los dragones que escupen fuego."
      },
      {
        title: "Jumanji: siguiente nivel",
        year: "2019",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/b1bTpxh0lRfw7kwRrWPeMOo7jbY.jpg",
        overview: "En esta ocasión, los 'jugadores' vuelven al juego, pero sus personajes se han intercambiado entre sí, lo que ofrece un curioso plantel: los mismos héroes con distinta apariencia. Pero, ¿dónde está el resto de la gente? Los participantes sólo tienen una opción: jugar una vez más a esta peligrosa partida para descubrir qué es realmente lo que está sucediendo."
      },
      {
        title: "Las brujas (de Roald Dahl)",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/s1y92244iBlKW04rEnaEK8i8tPY.jpg",
        overview: "Un pequeño huérfano a finales de 1967, se va a vivir con su querida abuela a Demopolis, un pueblo de Alabama. El niño y su abuela tienen extraños encuentros con algunas brujas por lo que deciden mudarse a un hotel de lujo en la costa. Por desgracia, llegan exactamente al mismo tiempo que la Gran Bruja que ha reunido a sus compinches de todo el planeta -que van de incógnito- para llevar a cabo sus horribles planes."
      },
      {
        title: "Naruto Shippuden la Película",
        year: "2007",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/vaEX9f8ud7iF0G7EoyGxAyRNV1p.jpg",
        overview: "Demonios que una vez destruyeron el mundo han sido revividos por alguien, de la unica manera de controlar a los demonios es sellandolos y la persona que lo puede hacer es shrine maiden Shion del Pais de los demonios quien tiene dos poderes, uno para sellar los demonios y el otro es predecir la muerte de los Humanos. La mision de Naruto es cuidar de Shion pero ella predice la muerte de Naruto. La unica forma de evitar la muerte, Naruto debe alejarce de Shion pero esto la dejaria indefensa, y el demonio el cual quiere matar a Shion conseguiria su objetivo lo cual terminaria siendo la destrucción del mundo, Naruto decide enfrentar la profecia de muerte al mantenerse al lado de Shion cumpliendo su misión."
      },
      {
        title: "Godzilla: Rey de los Monstruos",
        year: "2019",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/yQ59NPwzHE2XlYwU2VwHF9Wb0IJ.jpg",
        overview: "Los criptozoólogos de la agencia Monarch se enfrentan a un grupo de enormes monstruos: Godzilla, Mothra, Rodan y el enemigo de la humanidad, King Ghidorah. Estas ancianas criaturas harán todo lo posible por sobrevivir, poniendo en riesgo la existencia del ser humano en el planeta."
      },
      {
        title: "6 en la sombra",
        year: "2019",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/49z88ri8gToqfVodW3GYQJCDmPx.jpg",
        overview: "¿Cuál es la mejor parte de estar muerto? No se trata de escapar de tu jefe, de tu ex, de borrar tu historial criminal. La mejor parte de estar muerto es la libertad. Poder acabar con gente mala de verdad, sin tener que responder ante nadie. Liderados por el el enigmático Uno (Ryan Reynolds), seis individuos de distintas partes del mundo han sido elegidos no solo por su habilidad, sino por su deseo de eliminar su pasado para cambiar el futuro. Este equipo de justicieros, que han fingido su muerte, se dedican a desmantelar organizaciones criminales. Y es que, a pesar de estar muertos, harán historia."
      },
      {
        title: "Código 8",
        year: "2019",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/vjBHg4HahEhnqE6kKVjMBhO9h15.jpg",
        overview: "En Lincoln City algunos habitantes tienen habilidades extraordinarias. La mayoría vive por debajo del umbral de la pobreza, bajo la estrecha vigilancia de una fuerza policial fuertemente militarizada. Connor, un trabajador de la construcción con poderes, se une a una banda criminal para ayudar a su madre enferma. (Basada en el cortometraje «Code 8», 2016.)"
      },
      {
        title: "El Día del Sí",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/wFP7GnJX9sed6tvuB8tekOQxvzQ.jpg",
        overview: "Unos padres se proponen superar un día con sus hijos respondiendo únicamente con la palabra \"sí\" a todas sus peticiones. Película basada en la obra homónima escrita por Amy Krouse Rosenthal y Tom Lichtenheld."
      },
      {
        title: "Pacto de fuga",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/ziao1KWNkw4X5qL7rWCSJ6lyjX9.jpg",
        overview: "La noche  del 29 de enero de 1990,  poco antes de  iniciarse la reconstrucción democrática  en  Chile,  medio  centenar  de  presos  políticos  se  fugaron  de  la  cárcel pública  de  Santiago  por  un  túnel  que  24  militantes  del  Frente  Patriótico Manuel Rodríguez  (FPMR)  habían  excavado  durante  18  meses,  80  metros  de  longitud  con herramientas  tan  rudimentarias  como  cucharas,  tenedores  y  un  solo  destornillador; escondiendo  55  toneladas  de  tierra  dentro  del  centro  penitenciario.  Ni  los  presos comunes  de  las celdas cercanas ni los gendarmes  que  los  vigilaban  a  diario descubrieron  el  plan  que  llevaría  a  49  reclusos  a  alcanzar  la  libertad  en  uno  de  los escapes más sorprendentes de la historia penal chilena."
      },
      {
        title: "Vengadores: Endgame",
        year: "2019",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/br6krBFpaYmCSglLBWRuhui7tPc.jpg",
        overview: "Después de los eventos devastadores de 'Vengadores: Infinity War', el universo está en ruinas debido a las acciones de Thanos. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar deshacer sus acciones y restaurar el orden en el universo de una vez por todas, sin importar cuáles sean las consecuencias... Cuarta y última entrega de la saga \"Vengadores\"."
      },
      {
        title: "Vigilados",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/d8VPeuw5Ly3MtboVWcpmzDQzI2G.jpg",
        overview: "Dos parejas alquilan una casa para una escapada de fin de semana, pero comienzan a sospechar que el anfitrión puede estar espiando y, lo que debería haber sido un viaje de celebración, se convierte en algo mucho más siniestro."
      },
      {
        title: "Given -Movie",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/fsEq2LddodaHvhs4mTZAaqOV6sR.jpg",
        overview: "Después de la emisión del episodio final de la adaptación de anime de Given, la cuenta oficial de Twitter anunció que se lanzará una adaptación de largometraje en 2020, retomando directamente donde se detuvo la serie de televisión.  La historia se centra en Ritsuka, un guitarrista que ha perdido el interés por tocar. Un día, conoce a Mafuyu, que tiene una guitarra rota, y Ritsuka de mala gana comienza a enseñarle a Mafuyu a tocar la guitarra, pero cuando escucha la voz de Mafuyu, las cosas comienzan a cambiar de repente para Ritsuka."
      },
      {
        title: "Terminator: destino oscuro",
        year: "2019",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/k7PuHoj2oE7nEHExwliF2FSXFnr.jpg",
        overview: "Sarah Connor une todas sus fuerzas con una mujer cyborg para proteger a una joven de un extremadamente poderoso y nuevo Terminator."
      },
      {
        title: "The Amityville Harvest",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/luBPZjYEIALVs5AKp95OI9aCX9M.jpg",
        overview: "Mientras se hospeda en una vieja mansión para investigar su historia de contrabando de licores, Christina y su equipo de video documental entrevistan a Vincent, su espeluznante anfitrión, solo para darse cuenta que su imagen o su voz no queda grabado en sus equipos de vídeo."
      },
      {
        title: "De amor y monstruos",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/jtMNOMkCkj0hkm3ubWtd5rt1N5s.jpg",
        overview: "Un mundo posapocalíptico. Joel Dawson es un joven que deberá luchar contra monstruos, con tal de reunirse con Aimee, su amor del instituto. En el camino, tendrá que desafiar peligrosos animales mutantes y encontrará amistades inesperadas y también algunos enemigos."
      },
      {
        title: "Fast & Furious 10",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/2DyEk84XnbJEdPlGF43crxfdtHH.jpg",
        overview: "Trama desconocida La décima y última película de la franquicia 'Fast and Furious'."
      },
      {
        title: "Expediente Warren: The Conjuring",
        year: "2013",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/sKuHxkCogdk6YWzTyXYPoo9qd9n.jpg",
        overview: "Basada en una historia real documentada por los reputados demonólogos Ed y Lorraine Warren. Narra los encuentros sobrenaturales que vivió la familia Perron en su casa de Rhode Island a principios de los 70. El matrimonio Warren, investigadores de renombre en el mundo de los fenómenos paranormales, acudieron a la llamada de esta familia aterrorizada por la presencia en su granja de un ser maligno."
      },
      {
        title: "Te veo",
        year: "2019",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/gs91aIwM7dB152Wbg84LVrpFM2T.jpg",
        overview: "Cuando un niño de 12 años desaparece, el investigador principal Greg Harper lucha por equilibrar la presión de la investigación y los problemas con su esposa, Jackie. Enfrentando un asunto reciente, se ejerce una gran presión sobre la familia que lentamente roe el control de Jackie sobre la realidad. Pero después de que una presencia maliciosa se manifiesta en su hogar y pone a su hijo, Connor, en peligro mortal, la fría y dura verdad sobre el mal en el hogar Harper finalmente se descubre."
      },
      {
        title: "'Ohana: El tesoro de Hawái",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/INbepvgwxHRonW8Yx5tgqLMEnK.jpg",
        overview: "Mientras veranean en la isla de Oahu, dos hermanos de Brooklyn descubren un diario con la ubicación de un tesoro. Este hallazgo es el comienzo de una aventura épica, en la que hacen nuevos amigos y conectan con sus raíces hawaianas."
      },
      {
        title: "Sputnik",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/nLjfYXZ5XZX1gEopCGIrmqQq54A.jpg",
        overview: "URSS, 1983. El cosmonauta héroe soviético Vladimir Veshnyakov trae una criatura alienígena a la tierra ... en su propio cuerpo. En el laboratorio secreto de la ciudad del régimen, la neurofisióloga Tatyana Klimova intenta salvar al astronauta del monstruo, descubriendo que está experimentando un interés más que profesional en su paciente."
      },
      {
        title: "Flora y Ulises",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/ehesNeYjfTkkJgIYbKKrWcqY2fA.jpg",
        overview: "Flora, fan de los comics, salva a una ardilla cuyos poderes traen esperanza y alegría a su familia."
      },
      {
        title: "The Scientist",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/hIkKM1nlzk8DThFT4vxgW1KoofL.jpg",
        overview: "Steve Unger busca desesperadamente la cura para salvar a su esposa que padece una enfermedad terminal, además debe cuidar a su pequeña hija de 10 años Lily, lo que complica más aún su situación. Por eso, decide dejar de lado su ética y moral, experimentando con la modificación del ADN, la última esperanza para salvar a su esposa, o quizás para conocer el horror que nunca imaginó."
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Movies', 'null', {})
  }
};
