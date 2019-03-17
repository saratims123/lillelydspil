# api_p5_speech-master
(Btw jeg har lavet alt det her selv (bortset fra den kode vi stjal i timen) og hvis nogen stjæler min kode gnomer jeg dem >:( )
(Sara og Magnus har self tilladelse til at yoinke)

Hvis du ikke ved hvad du kan sige til programmet kan du bare sige "hjælp" og der kommer en liste af ting du kan sige.

Denne kode har en relativt høj mængde fokus på objekt programmering.

En måde at gøre koden en smule bedre end min metode ved spiral for eksempel ville være at bruge en foreach funktion, men da jeg ikke har 100% styr på det er jeg ikke selvsikker nok til at kunne springe ud i det.

dest. er objektet af hvor ni. skal rejse hen, så hvis dest.x=200 og ni.x=100 så vil ni.x rejse over til 200 i xværdien, det har jeg udført ved at lave en master funktion som jeg kalder for "move" som nok er en af de vigtiste funktioner i programmet.

Mine (4 indtil videre) variabler hedder load, direktionsbandit, amount og shape. load bestemmer om selve funktionen skal loade igen, den har jeg implementeret fordi uden den ville programmet køre om og om igen, og jeg kunne ikke komme på en anden metode end at bare tilføje den. direktionsbandit bestemmer hvilken retning den skal køre, og hvilket nummer i rækkefølgen den er på. amount bruges i f.eks: Spiral som gør at spiralen bliver større hver gang at den når til det punkt den skal køre om igen. Den sidste variabel hedder shape, og den er en variabel der bestemmer hvilken form at ni. skal skabe.

ni. er cirklen der laver stregen, og stregen bliver skabt fordi at baggrunden ikke bliver opdateret, dette kan undgås ved at man laver andre cirkler under cirklen når den bevæger sig.

Man kan vel kalde ni. for hunden og dest. for katten, fordi at ni. jager dest. 

En måde jeg gerne vil udvikle min kodning er at tilføje forEach og få en bedre måde at kalde på mine funktioner, og tilføje en genvej der åbner det bedre. :(
