const  numeroPrimo  =  ( numero  =  indefinido )  =>  {
    if  ( numero  ===  indefinido )  regresa  consola . advertir ( "No ingresaste un número" ) ;
    
    if  ( typeof  numero  !==  "number" )  return  console . error ( 'El valor"${numero}" ingresado, NO es un número' ) ;
    
    if  ( numero  ===  0 )  regresa  consola . error ( "El número no puede ser 0" ) ;
    
    if  ( numero  ===  1 )  regresa  consola . error ( "El número no puede ser 1" ) ;
    
    if  ( Math . sign ( numero )  ===  - 1 )  regresa  consola . error ( "El número no puede ser negativo" ) ;
    sea  ​​divisible =  falso ;
    
    for  ( sea  i  =  2 ;  i  <  numero ;  i ++ )  {    
        if  ( ( numero  % i )  ===  0 ) {  
        divisible  =  verdadero ;
        romper ; 
    }
    }
    retorno  ( divisible )
    ? consola _ log ( 'El número ${numero}, NO es primo' )
    : consola . log ( 'El número ${numero}, Sí es primo' ) ;
    }
    
    /* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */
    const  numeroParimpar  =  ( numero  =  indefinido )  =>  {
        if  ( numero  ===  indefinido )  regresa  consola . advertir ( "No ingresaste un número" ) ;
    
        if  ( typeof  numero  !==  "number" )  return  console . error ( 'El valor "${numero}" ingresado, NO es un número' ) ;
    
        retorno ( ( numero  % 2 )  ===  0 )
    
        ? consola _ info ( 'El numero ${numero} es Par' )
        : consola . info ( "El numero ${numero) es Impar" )
    
        }
    
    /* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */
    const  convertirGrados  =  ( grados  =  indefinido ,  unidad  =  indefinido )  =>  {
    
    if  ( grados  ===  indefinido )  devuelve  consola . advertir ( "No ingresaste grados a convertir" ) ;
    
    if  ( typeof  grados  !==  "number" )  return  console . error ( 'El valor "${grados}" ingresado, NO es un número' ) ;
    
    if  ( unidad  ===  indefinido )  regresa  consola . advertir ( "No ingresaste convertir el tipo de grado a" ) ;
    
    if  ( typeof  unidad  !==  "string" )  return  console . error ( 'El valor "${unidad}" ingresado, NO es una cadena de texto' ) ;
    
    if  ( unidad . length  !==  1  ||  ! / ( C | F ) / . test ( unidad ) )  return  console . advertir ( "Valor de unidad no reconocido" ) ;     
    
    if  ( unidad  ===  "C" )  {
             consola de retorno . info ( '${grados}°C = ${Math.round((grados * (9/5)) + 32)}°F' ) ;
    
            }  else  if  ( unidad  ===  "F" )  {
             consola de retorno . info ( '${grados) °F = ${Math.round(((grados - 32) * (5/9)))}°C' ) ;  } 
            más  {
             consola de retorno . error ( "El tipo de grados a convertir NO es valido" ) ; 
        }
        }
    
    /* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe.
    miFuncion(100,2) devolverá 4 base 10. */
    
    const  convertirBinarioDecimal  =  ( numero  =  indefinido ,  base  =  indefinido )  =>  {
    
        if  ( numero  ===  indefinido )  regresa  consola . advertir ( "No ingresaste el número a convertir" ) ;
    
        if  ( typeof  numero  !==  "number" )  return  console . error ( 'El valor "${numero}" ingresado, NO es un número' ) ;
    
        if  ( base  ===  indefinido )  devuelve  la consola . advertir ( "No ingresaste la base a convertir" ) ;
    
        if  ( tipo  de base  ! ==  "número" )  devuelve  consola . error ( 'El valor "${base}" ingresado, NO es un número' ) ;
    
        si  ( base  ===  2 ) {
    
         consola de retorno . info ( "${numero) base $(base) = $(parseInt(numero, base)) base 10" ) ;
    
        }  más  si  ( base  === 10 )  {
    
         consola de retorno . info ( '$(numero) base $(base) = $((numero.toString(2))) base 2' ) ;
    
        }
    }
    
    
    /* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada,
    Educación física. miFuncion(1000, 20) devolverá 800. */
    
     const  aplicarDescuento  =  ( monto  =  indefinido ,  descuento  =  0 )  =>  {
    if  ( monto  ===  indefinido )  devuelve  consola . advertir ( "No ingresaste el monto" ) ;
    
    if  ( typeof  monto !==  "number" )  return  console . error ( 'El valor "${monto)" ingresado, NO es un número' ) ;
    
    if  ( monto  ===  0 )  devuelve  consola . error ( "El monto no puede ser 0" ) ;
    
    if  ( Math . sign ( monto )  ===  - 1 )  devuelve  consola . error ( "El monto no puede ser negativo" ) ;
    
    if  ( typeof  descuento  !==  "number" )  return  console . error ( 'El valor "${descuento)" ingresado, NO es un número' ) ;
    
    if  ( Math . sign ( descuento )  === - 1 )  devuelve  consola . error ( "El descuento no puede ser negativo" ) ;
     consola de retorno . info ( '$(monto)-${descuento)% = ${monto-((monto* descuento) / 100)}' )
     }
    
    /* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy,
    Educación física. miFuncion(nueva Fecha(1984,4,23)) devolverá 35 años (en 2020). */
    
    const  calcularAnios  =  ( fecha  =  indefinido )  =>  {
    
        if  ( fecha  ===  indefinido )  devuelve  consola . advertir ( "No ingresaste la fecha" ) ;
    
        if  ( ! ( fecha  instancia de  Fecha ) )  devuelve  consola . error ( "El valor que ingresaste no es una fecha válida" ) ;
    
        let  hoyMenosFecha  =  nueva  Fecha ( ) . getTime ( )  -  fecha . obtenerHora ( ) , 
        aniosEnMS  =  1000  *  60  *  60 *  24  *  365
        aniosHumanos =  Math . piso ( hoyMenosFecha  /  aniosEnMS ) ;
        return  ( Math . sign ( aniosHumanos )  ===  - 1 )
        ? consola _ info ( 'Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.' )
        : ( Math . sign ( aniosHumanos )  === 1 )
         ? consola _ info ( 'Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.' )
        : consola . info ( 'Estamos en el año actual $(fecha.getFullYear()}.' )
        }
    
    /* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes,
    Educación física. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */
    
    const  contarLetras  =  ( cadena  =  "" )  =>  {
    
        if  ( ! cadena )  regresa  consola . advertir ( "No ingresaste una cadena de texto" ) ;
    
        if  ( tipodecadena  !== " cadena  " ) devuelve consola . error ( 'El valor "${cadena}" ingresado, NO es una cadena de texto' ) ;   
    
        let  vocales  =  0 ,
        consonantes  =  0 ;
    
        cadena  =  cadena . toLocaleLowerCase ( ) ;
    
        for  ( let  letra  de  cadena )  { 
        si  ( / [ aeiouáéíóúû ] / . prueba ( letra ) )  vocales ++ ;
    
        if  ( / [ bcdfghjklmnopqrstvwxyz ] / . test ( letra ) )  consonantes ++ ;
    
         consola de retorno . información ( { 
        cadena , 
        voces , 
        consonantes
        } )
        } }
    
    /* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero. */
    
        const  validarNombre  =  ( nombre  =  "" )  =>  {
    
        if  ( ! nombre )  devuelve  consola . advertir ( "No ingresaste un nombre" ) ;
    
        if  ( typeof  nombre  !==  "string" )  return  console . error ( '"El valor "${nombre}" ingresado, NO es una cadena de texto"' ) ;
    
        let  expReg = / ^ [ A-Za-zÑñÁáÉéĺíÓóÚúÜü \s ] + $ / g . prueba ( nombre ) ;
    
        retorno  ( expReg )
        ? consola _ info ( '"${nombre}", es un nombre valido' )
    
        : consola . warn ( '"${nombre}", NO es un nombre valido"' ) ; 
    }
    
    /* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */
    
    const  validaremail  =  ( email  =  "" )  =>  {
    
        si  ( ! correo electrónico )  devuelva  la consola . advertir ( "No ingresaste un nombre" ) ;
    
        if  ( tipo de  correo electrónico  ! ==  "cadena" )  devuelve  la consola . error ( '"El valor "${nombre}" ingresado, NO es una cadena de texto"' ) ;
    
        let  expReg =  / [ a-z0-9 ] + ( \. [ _a-z0-9 ] + ) * @ [ a-z0-9- ] + ( \. [ a-z0-9- ] + ) * ( \. [ az ] { 2,15 } ) / yo . prueba ( correo electrónico ) ;
    
        retorno  ( expReg )
        ? consola _ info ( '"${email}", es un email válido' )
    
        : consola . warn ( '"${email}", NO es un email válido"' ) ;  } 