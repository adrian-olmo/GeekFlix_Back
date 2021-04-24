'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Movies', [
      {
        title: "Godzilla vs Kong",
        year: "2021",
        genreID: 8,
        poster_path: "https://image.tmdb.org/t/p/w500/bvAKVNLJeBOb2hJBsaqLrC3mXo3.jpg"
      },
      {
        title: "Patrulla Trueno",
        year: "2021",
        genreID: 4,
        poster_path: "https://image.tmdb.org/t/p/w500/e9r4aLl7OAXdGK49u5oEjlbHKA3.jpg"
      },
      {
        title: "La Liga de la Justicia de Zack Snyder",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/rkuvJnamPl3xW9wKJsIS6qkmOCW.jpg"
      },
      {
        title: "Mortal Kombat",
        year: "2021",
        genreID: 2,
        poster_path: "https://image.tmdb.org/t/p/w500/8yhtzsbBExY8mUct2GOk4LDDuGH.jpg"
      },
      {
        title: "The Marksman (El protector)",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/ncnZa574KFkSRrwPpxbyRoIrteW.jpg"
      },
      {
        title: "Chaos Walking",
        year: "2021",
        genreID: 8,
        poster_path: "https://image.tmdb.org/t/p/w500/idQDWn8Yhl4zXLwpyHKlr3NXYO9.jpg"
      },
      {
        title: "Raya y el último dragón",
        year: "2021",
        genreID: 3,
        poster_path: "https://image.tmdb.org/t/p/w500/yHpNgjEXzZ557YiZ2r3VrKid788.jpg"
      },
      {
        title: "Mortal Kombat Legends: La venganza de Scorpion",
        year: "2020",
        genreID: 3,
        poster_path: "https://image.tmdb.org/t/p/w500/sqBl12v4AXVoc5PmeGnd8oZ7HHY.jpg"
      },
      {
        title: "Monster Hunter",
        year: "2020",
        genreID: 2,
        poster_path: "https://image.tmdb.org/t/p/w500/dZOYV74OQsmBkoKPIRu0n1sYHZb.jpg"
      },
      {
        title: "Centinela",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/oz60oMLIyZfkww0y4AiZ5uTNRqL.jpg"
      },
      {
        title: "Twist",
        year: "2021",
        genreID: 5,
        poster_path: "https://image.tmdb.org/t/p/w500/29dCusd9PwHrbDqzxNG35WcpZpS.jpg"
      },
      {
        title: "Tom y Jerry",
        year: "2021",
        genreID: 3,
        poster_path: "https://image.tmdb.org/t/p/w500/orzPlWUbf0S5HeWmpP3TeHvduwn.jpg"
      },
      {
        title: "Cherry",
        year: "2021",
        genreID: 10,
        poster_path: "https://image.tmdb.org/t/p/w500/pwDvkDyaHEU9V7cApQhbcSJMG1w.jpg"
      },
      {
        title: "Bajocero",
        year: "2021",
        genreID: 9,
        poster_path: "https://image.tmdb.org/t/p/w500/340AAxjvtGXChWkqhIlScZTSokq.jpg"
      },
      {
        title: "Wonder Woman 1984",
        year: "2020",
        genreID: 8,
        poster_path: "https://image.tmdb.org/t/p/w500/oG8rC5WEUFEMsMeBLGJWspJ1Gp5.jpg"
      },
      {
        title: "Ruega por nosotros",
        year: "2021",
        genreID: 6,
        poster_path: "https://image.tmdb.org/t/p/w500/hPoOn553ARmSQl0ChKTlGDvYq9x.jpg"
      },
      {
        title: "Barrenderos espaciales",
        year: "2021",
        genreID: 2,
        poster_path: "https://image.tmdb.org/t/p/w500/eQyi0oEk0WtkiWJxPi58M53Crzv.jpg"
      },
      {
        title: "A descubierto",
        year: "2021",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/bQ2aNqcIGopI2AsTREc8sQlz6CN.jpg"
      },
      {
        title: "Nadie",
        year: "2021",
        genreID: 9,
        poster_path: "https://image.tmdb.org/t/p/w500/uuFrRLw3i5cpJZMhiOjo5piZ0tj.jpg"
      },
      {
        title: "Miraculous World: Las aventuras de Ladybug en Nueva York",
        year: "2020",
        genreID: 3,
        poster_path: "https://image.tmdb.org/t/p/w500/kIHgjAkuzvKBnmdstpBOo4AfZah.jpg"
      },
      {
        title: "Abismo",
        year: "2020",
        genreID: 6,
        poster_path: "https://image.tmdb.org/t/p/w500/tA3k9LyE2togmIuNnOgw6SmzWus.jpg"
      },
      {
        title: "Pequeños detalles",
        year: "2021",
        genreID: 9,
        poster_path: "https://image.tmdb.org/t/p/w500/j62o61KqXrYeThdmNOtm3UplUSl.jpg"
      },
      {
        title: "Alerta roja",
        year: "2019",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/A3BP44EvnJIIhyNVwPT0IpvNAoc.jpg"
      },
      {
        title: "Punto rojo",
        year: "2021",
        genreID: 5,
        poster_path: "https://image.tmdb.org/t/p/w500/q2KhGQQXdunhiJZuuIxGu27rji.jpg"
      },
      {
        title: "Los Croods: Una nueva era",
        year: "2020",
        genreID: 3,
        poster_path: "https://image.tmdb.org/t/p/w500/5uMWKEmegf5aTJnp1u98JF4QerP.jpg"
      },
      {
        title: "Skylines",
        year: "2020",
        genreID: 2,
        poster_path: "https://image.tmdb.org/t/p/w500/2W4ZvACURDyhiNnSIaFPHfNbny3.jpg"
      },
      {
        title: "Un mal viaje",
        year: "2021",
        genreID: 4,
        poster_path: "https://image.tmdb.org/t/p/w500/jxGuDeH1nVwwY9fgahRPVqayI1b.jpg"
      },
      {
        title: "Amenaza en el espacio",
        year: "2020",
        genreID: 8,
        poster_path: "https://image.tmdb.org/t/p/w500/13B6onhL6FzSN2KaNeQeMML05pS.jpg"
      },
      {
        title: "Agencia Secreta de Control Mágico",
        year: "2021",
        genreID: 3,
        poster_path: "https://image.tmdb.org/t/p/w500/B3Xz48iyIh9ejffVtfCxwzTO7n.jpg"
      },
      {
        title: "Soul",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/gI9oVLHXgPYidW2W4A7p1pYW9QB.jpg"
      },
      {
        title: "Solo di que sí",
        year: "2021",
        genreID: 4,
        poster_path: "https://image.tmdb.org/t/p/w500/80CVQssUAbU2Q5w9jApzKEmtoLy.jpg"
      },
      {
        title: "Vanguard",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/mCYN3bccjOG0w857JTf5UOKsPEH.jpg"
      },
      {
        title: "Jiu Jitsu",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg"
      },
      {
        title: "Aves de presa (y la fantabulosa emancipación de Harley Quinn)",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/1wLqXiiiaTSK8Y0n7N85O0jaNJm.jpg"
      },
      {
        title: "Wrong Turn",
        year: "2021",
        genreID: 6,
        poster_path: "https://image.tmdb.org/t/p/w500/4U1SBHmwHkNA0eHZ2n1CuiC1K1g.jpg"
      },
      {
        title: "Guardianes de la noche - Kimetsu no Yaiba - La película: Tren Infinito",
        year: "2020",
        genreID: 2,
        poster_path: "https://image.tmdb.org/t/p/w500/3f4ETSwknZs74lmUYC7ENIMRBMP.jpg"
      },
      {
        title: "Bad Boys for Life",
        year: "2020",
        genreID: 9,
        poster_path: "https://image.tmdb.org/t/p/w500/ur1wCiFEwZzjehqQM11FFN66rwL.jpg"
      },
      {
        title: "Ava",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg"
      },
      {
        title: "Aquaslash",
        year: "2019",
        genreID: 6,
        poster_path: "https://image.tmdb.org/t/p/w500/wB8qqLIaYDkYEnjbS5hAJiTuYU6.jpg"
      },
      {
        title: "Un ladrón honesto",
        year: "2020",
        genreID: 5,
        poster_path: "https://image.tmdb.org/t/p/w500/9Kee2stO6c2JLgH2Q2ek67H7QTB.jpg"
      },
      {
        title: "Noche en el paraíso",
        year: "2020",
        genreID: 5,
        poster_path: "https://image.tmdb.org/t/p/w500/mWZ2aujwBdFEONvRQv05zPBGy7J.jpg"
      },
      {
        title: "Tenet",
        year: "2020",
        genreID: 8,
        poster_path: "https://image.tmdb.org/t/p/w500/buSr2RIxzJ5Zh6dLaLBsqAdvz3I.jpg"
      },
      {
        title: "El robo del siglo",
        year: "2020",
        genreID: 9,
        poster_path: "https://image.tmdb.org/t/p/w500/acQ5lwnQGwre8n3m8JzTTcNKc5h.jpg"
      },
      {
        title: "After: En mil pedazos",
        year: "2020",
        genreID: 9,
        poster_path: "https://image.tmdb.org/t/p/w500/8nPw22C41EUWXREWmY9iIivMXxm.jpg"
      },
      {
        title: "Fast & Furious: Hobbs & Shaw",
        year: "2019",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/5REralbYRALUnTpICY3TBMyXYGW.jpg"
      },
      {
        title: "Joker",
        year: "2019",
        genreID: 5,
        poster_path: "https://image.tmdb.org/t/p/w500/v0eQLbzT6sWelfApuYsEkYpzufl.jpg"
      },
      {
        title: "My Hero Academia: el despertar de los héroes",
        year: "2019",
        genreID: 3,
        poster_path: "https://image.tmdb.org/t/p/w500/vH5stD5pTogbZVXadIKQyMSKzTt.jpg"
      },
      {
        title: "Tentacles",
        year: "2021",
        genreID: 6,
        poster_path: "https://image.tmdb.org/t/p/w500/kBKKXVbVwIP81u8Bnhguux48Sdn.jpg"
      },
      {
        title: "Bloodshot",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/b0Sokh7DazDAxGOpt0ln9soTTET.jpg"
      },
      {
        title: "The Tax Collector",
        year: "2020",
        genreID: 9,
        poster_path: "https://image.tmdb.org/t/p/w500/bHke4PS5Whg0pz6dDWhzAmwvEr8.jpg"
      },
      {
        title: "Dragonheart: Vengeance",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/mPGAlXyPH21qg38GF1Ydd0xDg7B.jpg"
      },
      {
        title: "El rey de Zamunda",
        year: "2021",
        genreID: 4,
        poster_path: "https://image.tmdb.org/t/p/w500/jJFvY25lPaKlapYOeIH6N5aKcbh.jpg"
      },
      {
        title: "100% Wolf: Pequeño gran lobo",
        year: "2020",
        genreID: 3,
        poster_path: "https://image.tmdb.org/t/p/w500/4fJcKIBQ5Enwo47lKqI2bMGboQ5.jpg"
      },
      {
        title: "Legionnaires Trail",
        year: "2020",
        genreID: 2,
        poster_path: "https://image.tmdb.org/t/p/w500/6ssoBXQOxNhrsGJoM6Tcvm57V79.jpg"
      },
      {
        title: "Evangelion: 3.0+1.0",
        year: "2021",
        genreID: 3,
        poster_path: "https://image.tmdb.org/t/p/w500/9aaeMoB9v9f4jriQwk0anrBpqtn.jpg"
      },
      {
        title: "Tyler Rake",
        year: "2020",
        genreID: 9,
        poster_path: "https://image.tmdb.org/t/p/w500/1bYcM4KH5jncH99a2JvXd3yYdNs.jpg"
      },
      {
        title: "Assassin 33 A.D.",
        year: "2020",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/8jDvtdH327I8TgX3UPdkAsZF1dA.jpg"
      },
      {
        title: "Fear of Rain",
        year: "2021",
        genreID: 5,
        poster_path: "https://image.tmdb.org/t/p/w500/b2shaNA4F8zNIwoRYr33lPTiFfl.jpg"
      },
      {
        title: "¡Scooby-Doo! La Espada y Scooby",
        year: "2021",
        genreID: 3,
        poster_path: "https://image.tmdb.org/t/p/w500/jOMK2YFKtzXGTm0tedsurDj5pFh.jpg"
      },
      {
        title: "Bob Esponja: Un héroe al rescate",
        year: "2020",
        genreID: 3,
        poster_path: "https://image.tmdb.org/t/p/w500/fi2pg2mtAZwhq3qVuAs6PztjnHT.jpg"
      },
      {
        title: "Naruto Shippuden la Película",
        year: "2007",
        genreID: 3,
        poster_path: "https://image.tmdb.org/t/p/w500/vaEX9f8ud7iF0G7EoyGxAyRNV1p.jpg"
      },
      {
        title: "Godzilla: Rey de los Monstruos",
        year: "2019",
        genreID: 8,
        poster_path: "https://image.tmdb.org/t/p/w500/yQ59NPwzHE2XlYwU2VwHF9Wb0IJ.jpg"
      },
      {
        title: "Guerra de Likes",
        year: "2021",
        genreID: 4,
        poster_path: "https://image.tmdb.org/t/p/w500/gewQlwxgqo595Pw25lwaPfI4h5D.jpg"
      },
      {
        title: "Vengadores: Infinity War",
        year: "2018",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/ksBQ4oHQDdJwND8H90ay8CbMihU.jpg"
      },
      {
        title: "Jumanji: siguiente nivel",
        year: "2019",
        genreID: 2,
        poster_path: "https://image.tmdb.org/t/p/w500/b1bTpxh0lRfw7kwRrWPeMOo7jbY.jpg"
      },
      {
        title: "Occidente",
        year: "2019",
        genreID: 5,
        poster_path: "https://image.tmdb.org/t/p/w500/6Bp5EyQCunRumsswNyw9FzWM5Ji.jpg"
      },
      {
        title: "Contigo a muerte",
        year: "2021",
        genreID: 7,
        poster_path: "https://image.tmdb.org/t/p/w500/31w1es7jxQj41ybQQPUX1j4EMQy.jpg"
      },
      {
        title: "De amor y monstruos",
        year: "2020",
        genreID: 2,
        poster_path: "https://image.tmdb.org/t/p/w500/jtMNOMkCkj0hkm3ubWtd5rt1N5s.jpg"
      },
      {
        title: "La Funeraria",
        year: "2021",
        genreID: 6,
        poster_path: "https://image.tmdb.org/t/p/w500/1rlgIzw129hEl46bFaJZ7wpEEZZ.jpg"
      },
      {
        title: "The Unfamiliar",
        year: "2020",
        genreID: 6,
        poster_path: "https://image.tmdb.org/t/p/w500/g7Bxg2j7nbCpKo7U0j1jwU79XPY.jpg"
      },
      {
        title: "Nezha: El renacer de un dios",
        year: "2021",
        genreID: 3,
        poster_path: "https://image.tmdb.org/t/p/w500/iyOgNaaDX67AUMWlzsGZVO1luoh.jpg"
      },
      {
        title: "The Doorman",
        year: "2020",
        genreID: 9,
        poster_path: "https://image.tmdb.org/t/p/w500/pklyUbh4k1DbHdnsOMASyw7C6NH.jpg"
      },
      {
        title: "Vengadores: Endgame",
        year: "2019",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/br6krBFpaYmCSglLBWRuhui7tPc.jpg"
      },
      {
        title: "Código 8",
        year: "2019",
        genreID: 8,
        poster_path: "https://image.tmdb.org/t/p/w500/vjBHg4HahEhnqE6kKVjMBhO9h15.jpg"
      },
      {
        title: "Host",
        year: "2020",
        genreID: 6,
        poster_path: "https://image.tmdb.org/t/p/w500/h7dZpJDORYs5c56dydbrLFkEXpE.jpg"
      },
      {
        title: "Superniños",
        year: "2020",
        genreID: 2,
        poster_path: "https://image.tmdb.org/t/p/w500/5AcJFpvxcqjLNADrCNAUYOsIrQP.jpg"
      },
      {
        title: "Fast & Furious 10",
        year: "2023",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/2DyEk84XnbJEdPlGF43crxfdtHH.jpg"
      },
      {
        title: "Atrapado en Grand Isle",
        year: "2019",
        genreID: 9,
        poster_path: "https://image.tmdb.org/t/p/w500/OQf805zU1G5W1fAFc5pWTsvSCn.jpg"
      },
      {
        title: "6 en la sombra",
        year: "2019",
        genreID: 4,
        poster_path: "https://image.tmdb.org/t/p/w500/49z88ri8gToqfVodW3GYQJCDmPx.jpg"
      },
      {
        title: "Las brujas (de Roald Dahl)",
        year: "2020",
        genreID: 4,
        poster_path: "https://image.tmdb.org/t/p/w500/s1y92244iBlKW04rEnaEK8i8tPY.jpg"
      },
      {
        title: "Spider-Man: Lejos de casa",
        year: "2019",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/iKVR1ba3W1wCm9bVCcpnNvxQUWX.jpg"
      },
      {
        title: "El día del Sí",
        year: "2021",
        genreID: 4,
        poster_path: "https://image.tmdb.org/t/p/w500/ycDm9vHlhCTZAQ4Wl5NkhNJ5DFk.jpg"
      },
      {
        title: "'Ohana: El tesoro de Hawái",
        year: "2021",
        genreID: 2,
        poster_path: "https://image.tmdb.org/t/p/w500/INbepvgwxHRonW8Yx5tgqLMEnK.jpg"
      },
      {
        title: "Pacto de fuga",
        year: "2020",
        genreID: 9,
        poster_path: "https://image.tmdb.org/t/p/w500/ziao1KWNkw4X5qL7rWCSJ6lyjX9.jpg"
      },
      {
        title: "John Wick: Capítulo 3 - Parabellum",
        year: "2019",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/aKw7oqYdfn4pkKYvp18Gd1YhK6m.jpg"
      },
      {
        title: "Chaco",
        year: "2020",
        genreID: 10,
        poster_path: "https://image.tmdb.org/t/p/w500/hCR2i9rK6P4VHMfFw2MT5jDGJcN.jpg"
      },
      {
        title: "Mulán",
        year: "2020",
        genreID: 8,
        poster_path: "https://image.tmdb.org/t/p/w500/72XYwdIugXnjHxS6upI6U0yeTBU.jpg"
      },
      {
        title: "Devoto, la invasión silenciosa",
        year: "2020",
        genreID: 9,
        poster_path: "https://image.tmdb.org/t/p/w500/ppqef9A3tg3PJiIA82gTiA7n9Fi.jpg"
      },
      {
        title: "La tierra y la sangre",
        year: "2020",
        genreID: 9,
        poster_path: "https://image.tmdb.org/t/p/w500/cUEjmFnn9lVpQYC3d88QPQHrDr4.jpg"
      },
      {
        title: "Given -Movie",
        year: "2020",
        genreID: 3,
        poster_path: "https://image.tmdb.org/t/p/w500/fsEq2LddodaHvhs4mTZAaqOV6sR.jpg"
      },
      {
        title: "Mortal Kombat",
        year: "1995",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/fcK7tzSSXMYiMN8E9KlZJL1BYyp.jpg"
      },
      {
        title: "La mensajera",
        year: "2019",
        genreID: 9,
        poster_path: "https://image.tmdb.org/t/p/w500/qobimZ1TkVJYiJDAOzVRMdBX3a8.jpg"
      },
      {
        title: "Terminator: destino oscuro",
        year: "2019",
        genreID: 8,
        poster_path: "https://image.tmdb.org/t/p/w500/k7PuHoj2oE7nEHExwliF2FSXFnr.jpg"
      },
      {
        title: "Underwater",
        year: "2020",
        genreID: 2,
        poster_path: "https://image.tmdb.org/t/p/w500/jlHL2BH176JApGiLnNQLQgdjMFd.jpg"
      },
      {
        title: "Venom",
        year: "2018",
        genreID: 1,
        poster_path: "https://image.tmdb.org/t/p/w500/jMBTJQiHAyGlZR05J2sq5coA6ew.jpg"
      },
      {
        title: "Batman: Death in the Family",
        year: "2020",
        genreID: 3,
        poster_path: "https://image.tmdb.org/t/p/w500/gHNPuaZLXtiIowtIjzYDdYnITJU.jpg"
      },
      {
        title: "Kono Subarashii Sekai ni Shukufuku wo!: Kurenai Densetsu",
        year: "2019",
        genreID: 3,
        poster_path: "https://image.tmdb.org/t/p/w500/lnlEWSvfiHbQOgVyfnEqU1q31Yg.jpg"
      },
      {
        title: "La patrulla al rescate",
        year: "2020",
        genreID: 3,
        poster_path: "https://image.tmdb.org/t/p/w500/qHcn3PbjVHxBweDZxWpYH3JfugS.jpg"
      },
      {
        title: "Tóxico",
        year: "2020",
        genreID: 9,
        poster_path: "https://image.tmdb.org/t/p/w500/mcOuxJptI7UsL4XYwajSieNrkYc.jpg"
      },
      {
        title: "Flora y Ulises",
        year: "2021",
        genreID: 4,
        poster_path: "https://image.tmdb.org/t/p/w500/ehesNeYjfTkkJgIYbKKrWcqY2fA.jpg"
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Movies', 'null', {})
  }
};
