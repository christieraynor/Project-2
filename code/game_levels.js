var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "   o    o     o   o                                                             ",
   "   y    y     y   y                                                o            ",
   "   y     y   y    y                              o     o    o     xxx           ",
   "   y      y y  z  y    o                  o     xx     xx   x    xx!xx          ",
   "   yyyy    y   y  y   xxx                 xx                     x!!!x          ",
   "                                     o                           xx!xx          ",
   "                                   xxxxx                          xvx       o   ",
   "                                                                            xxxx",
   " xx                        o                           pp                    x  ",
   "  x                       xxxx           xxxxxx                            o x  ",
   "  x                                      x!!!!x                         xxxxxx  ",
   "  x                                      x =                                 x  ",
   "  x  @                   o               x  o                              o x  ",
   "  xxxxxxxxx        xxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx    xxxxxxxxxxxxxxxxxxxx  ",
   "          x       ox          x   x                  x!!!!x                     ",
   "          x      xxx          x!|!x                  x!!!!x                     ",
   "          xxxx!!!!!x          x!!!x                  x!!!!x                     ",
   "           x!!!!!!!x          xxxxx                  xxxxxx                     ",
   "           xxxxxxxxx                                                            ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "   x                                                                            ",
   "  wx                                                                            ",
   "xxxx                                                                            "],
  ["                                                                  xxxxxxx                            xxxxxxxxxxx  ",
   "                                                               xxxx     xxxx                         v!!!v!!!x!x  ",
   "                                                              xx           xx                                x!x  ",
   " =                                            o           = xx                                               x!x  ",
   "                                         xxxxxxxxxpp        x                                     o   o   o  x!x  ",
   "                                   xxx           x!x        x     o   o                                     xx!x  ",
   "                             xxx                 x!x        x                                   xxxxxxxxxxxxx!!x  ",
   "    o    o     o   o                             xvx        x     x   x                       o =!!!!!!!!!!!!!xx  ",
   "    y    y     y  yyy                                       xx  |   |   |  xx            xxxxxxxxxxxxxxxxxxxxx    ",
   "    y     y   y      y                                        xx!!!!!!!!!!!xx                                     ",
   "    y z    y y      y                                          xxxx!!!!!xxxx      o                               ",
   "    yyyy    y   y  yyyy                        x     x            xxxvxxx        xxx                      o       ",
   "                           o                   x     xo                          x x                      xx      ",
   "                          xxx                  x     x                           !!xo                             ",
   "                                               x     x                        x  !!xx                             ",
   "                 o o                        xxxx     x      o  o       o         !!x                              ",
   "                                     o         x    ox      y  y     x   x       !!x         xxx           o      ",
   "               xxxxxxxxx      xxx   xxx        x    xx               x   x       !!x         x x           xx     ",
   "              xx       x        x   x          xo    x     xxxxxx    x   x   xxxxxxxxx      ox                    ",
   "             xx        x        x o x   x!!!x  xx    x               x   x   x             xxx    xx              ",
   "     @              o  x        x   x   x!!!x  x     x               x  xx o x             !!x                    ",
   "    xxx            xxxxx        x   x   xxxxx  x     x               x   xxxxx   xxxxxx      x         =          ",
   "    x x                x       xx y xx         x     xxx            xx     o     x           x                    ",
   "w!!!x x!!!xxxxxxx      x!!!!!!xx     xx!!!!!!!!x     x!!!!!!!xx      x     =     x           x         o          ",
   "!!!!x x!!!!!!x         x!!!!!xx      ppppppppppp     x!!!!!!!xx      xxxxxxxxxxxxx     o   xxx         x          ",
   "!!!!x x!!!!!!x        zx!!!!!x                     xx!!!!!!xx                  x          xx      pwpwpwpwpwp     ",
   "!!!!x x!!!!!!xo      xxx!!!!!x        =     =    = xx!!!!!!xx                  x     xxxxxxx                      ",
   "!!!!x x!!!!!!xxxxx     x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx                   x  o  x                            ",
   "!!!!x x!!!!!!x!!!!!!!!!x!!!!!!xpppppppx!!!!!!!!!!!!!!!!!!xx                    xppxppx                            ",
   "!!!!x x!!!!!!xxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx       pppp                                             "],
  ["                                                                                                              ",
   "     v       v                                                                                                ",
   "                                                                                                              ",
   "                  o                                                                                           ",
   "                 xxx                                                                                          ",
   "                                        o                                                                     ",
   "                                                                                                              ",
   "                                        x                                                                     ",
   "         xxx                            x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                       xxx                                                                    ",
   "xxx                                    x|x                                                                    ",
   "                                       x x                  x          xxxxx                                  ",
   "                                     xxx xxx                x          x        ppp                           ",
   "                                      x   x                 x   oooo   x                                      ",
   "                                   xxxx   xx   o  x   x     x                           o                     ",
   "                                      x   xxxxxxxxx   xxxxxxx                           x x                   ",
   "    o     o       o   o               x   x           x           o                    x!!!x                  ",
   "    y     y!     !y  yyyy             x   x           x                                 xxx                   ",
   "    y      y!   !y      y             x   xx          x                                                       ",
   "    y       y! !y      y   xx         x   x= = = =    x          xxx                                          ",
   "    y!!!!!   y!y  !  !!!y             x o x           x                       o                     o         ",
   "    yyyyyy    y   y  yyyy             x   x    = = = =x     o                xxx                              ",
   "                                    xxx   xxz         x                     x!!!x                  xxx        ",
   "                              o   o       x           x    xx                xxv        ppp                   ",
   "                                          x           x              x                 x!!!x                  ",
   "                             xxxpxxx xxx xxx     o o  x!!!!!!!!!!!!!!x                  xvx                   ",
   "                             xxxxxxx x xxxxx          x!!!!!!!!!!!!!!x                                        ",
   "                             x  v       v x   xxxxxxxxxxxxxxxxxxxxxxx                 o                   o   ",
   "   o                      xxxxx           xx           x    x                        xxx                      ",
   "  xxx                         x     o     x            x  w x                       x!!!x                xxx  ",
   "  x x    o         o          x    xxx    x            x                             xxx                 x x  ",
   "  x |   xxxx      xxxx        x    xxx    xxxxxxx                        xxxxx                             x  ",
   "  x                           x           x                              x   x                             x  ",
   "  x                           x           x         o         o          x o x                             x  ",
   "  x                           x           x       |xxxx|    |xxxx|     xxx   x                  xxxx       x  ",
   "  x            xxxxxxx        x    o o    x                              x       x!!!!!!p       v  v       x  ",
   "  x            xv!!!!x        x           x                             xxx      p!    !p                  x  ",
   "  x            x !!!!x        x    xxx    x  o                          x x      p!    !p                  x  ",
   "  x                 !x        xwwwwxxxwwwwx  x    x    x    x    x     xx xx        o                      x  ",
   "  x|     @        o !x        x           x!!x    x!!!!x    x!!!!x    xx   xx=                            =x  ",
   "zzxxxxxxxxxxxxxxxxxxxx        x           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                                                                              ",
   "                                                                                                              "],
  ["                                 y    y     y  y  y                                                    xxxxxxxx",
   "                                 y     y   y   yyyy                                                o   x  o  x",
   "                                 y      y y       y                                               xxxxxx     x",
   "                                 yyyy    y   y    y                                                         xx",
   "       x!   !x                                                                                               x",
   "       x!   !x                                                                                    xxx xxx    x",
   "       x!   !x                                                                               o o oxxx xvx    x",
   "       x!   !x     xxx                                                                               ox      x",
   "       x!   !x                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx    x%x",
   "       x!   !x                                                x   x x   x x   x x   x x   x x   x x=       xxx",
   "       x! o !x            x                                   xxx x|xxx x|xxx x|xxx x|xxx x|xxx x xxxxx      x",
   "       x!   !x                             o                    x x!!!x x!!!x x!!!x x!!!x x!!!x x    =x  ooo x",
   "       x! o !x            o            xxxxxxxxx             xxxx xxxxx xxxxxvxxxxx xxxxxvxxxxx xxxxxx xxxxxxx",
   "       x!   !x                         xx!!!!!xx                                                              ",
   "       x! o !x           xxx           xx=    xx          xx                                                  ",
   "       x!   !x                         xx ooo xx                                                              ",
   "       x! o !x                                                                                                ",
   "       x!   !x                                        xx                                                      ",
   "       x! o !x     xxx         xxx                                                                            ",
   "       x!   !x                                                                  o      o                      ",
   "       x! o !x            o                                                     x      x                      ",
   "       x!   !x                                            xx     xx      o                  o                 ",
   "       x!   !x           xxx         xxx                                 x                  x                 ",
   "       x!   !x                                                                                       p        ",
   "          z                                 xx                   ||                                  x        ",
   "  xxxxxxxxxxx                                                                             o                   ",
   "  x!!!!!!!!!x o xxxxxxxxx o xxxxxxxxx o xx                                    o     o     x                   ",
   "  x         x   x       x   x       x   x                 ||                  x     x                         ",
   "  xz @      xxxxx   o   xxxxx   o   xxxxx                                %                                    ",
   "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
   "        x=                  =                =x   x                     xxx                      |            ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!|!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "],
  ["                                                                               ",
   "        @                                                                      ",
   "      xxxx            xxxx      xxxxxxx          xxxx     xxxx                 ",
   "     xxyyxxx        xxxyyxx    xxyyyyyxxx       xxyyxx   xxyyxx                ",
   "      xxxyyxxx    xxxyyxxx   xxyyxxxxxyyxx      xxyyxx   xxyyxx                ",
   "        xxxyyxxxxxxyyxxx    xxyyxx   xxyyxx     xxyyxx   xxyyxx                ",
   "          xxxyyxxyyxxx     xxyyxx     xxyyxx    xxyyxx   xxyyxx                ",
   "            xxxyyxxx       xxyyxx     xxyyxx    xxyyxx   xxyyxx                ",
   "             xxyyxx        xxyyxx     xxyyxx    xxyyxx   xxyyxx                ",
   "             xxyyxx         xxyyxx   xxyyxx     xxyyxx   xxyyxx                ",
   "             xxyyxx          xxyyxxxxxyyxx       xxyyxxxxxyyxx                 ",
   "             xxyyxx            xxyyyyyxx          xxyyyyyyyxx                  ",
   "              xxxx              xxxxxxx            xxxxxxxxx                   ",
   "                                                                               ",
   "   xxxx                         xxxx    xxxx      xxxx       xxxx     xxxx     ",
   "  xxyyxx                       xxyyxx  xxyyxx    xxyyxx     xxyyxx   xxyyxx    ",
   "   xxyyxx                     xxyyxx   xxyyxx    xxyyyyxx   xxyyxx   xxyyxx    ",
   "    xxyyxx        xxxx       xxyyxx    xxyyxx    xxyyxyyxx  xxyyxx   xxyyxx    ",
   "     xxyyxx      xxyyxx     xxyyxx     xxyyxx    xxyyxxxyyxxxxyyxx   xxyyxx    ",
   "      xxyyxx    xxyyyyxx   xxyyxx      xxyyxx    xxyyxxxxyyxxxyyxx   xxyyxx    ",
   "       xxyyxx xxyyxxxyyxx xxyyxx       xxyyxx    xxyyxx xxyyxxyyxx    xxxx     ",
   "        xxyyxxxyyxx xxyyxxxyyxx        xxyyxx    xxyyxx  xxyyxyyxx             ",
   "         xxyyxyyxx   xxyyxyyxx         xxyyxx    xxyyxx   xxyyyyxx    xxxx     ",
   "          xxxyxxx     xxxyxxx          xxyyxx    xxyyxx    xxxyyxx   xxyyxx    ",
   "            xxx         xxx             xxxx      xxxx       xxxx     xxxx     ",
   "                                                                               ",
   "                                                                               ",
   "                                                                               ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
