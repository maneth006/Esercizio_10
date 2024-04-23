import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostraServicesService {

  mostre: any = [
    {id: 1 ,nomeMostra:"Il Viaggio", nomeArtista: "Frida Kahlo", descrizione:"Un'immersione completa nell'opera e nella vita di Frida Kahlo, attraverso dipinti, fotografie, oggetti personali e ambienti ricostruiti.", dataInizio: new Date(2024, 2, 22), dataFine: new Date(2024, 11, 26), img: "../assets/img/frida.png"},
    {id: 2 ,nomeMostra:"Raffaello e Fornarina", nomeArtista: "Raffaello Sanzio", descrizione:" Una mostra dedicata al rapporto tra Raffaello e la sua musa ispiratrice, la Fornarina, con capolavori provenienti da musei di tutto il mondo.", dataInizio: new Date(2024, 3, 17), dataFine: new Date(2024, 6, 25), img: "../assets/img/sanzio.png"},
    {id: 3 ,nomeMostra:"L'ombra del Caravaggio", nomeArtista: "Caravaggio e i suoi seguaci", descrizione:"Una mostra che esplora il genio di Caravaggio e la sua influenza sui pittori del suo tempo, con opere provenienti da collezioni pubbliche e private.", dataInizio: new Date(2024, 9, 15 ), dataFine: new Date(2025, 1, 8), img: "../assets/img/caravaggio.png"},
    {id: 4 ,nomeMostra:"La Secessione Viennese", nomeArtista: "Gustav Klimt", descrizione:" Una mostra che celebra l'opera di Gustav Klimt e il movimento artistico della Secessione Viennese, con capolavori provenienti dal Belvedere di Vienna.", dataInizio: new Date(2024, 2, 28), dataFine: new Date(2024, 6, 28), img: "../assets/img/klimt.png"},
    {id: 5 ,nomeMostra:"Emozione dell'Infinito", nomeArtista: "Vincent van Gogh", descrizione:"Una mostra immersiva dedicata a Vincent van Gogh, con proiezioni ad alta definizione, realtà virtuale e ricostruzioni degli ambienti in cui ha vissuto e dipinto.", dataInizio: new Date(2024, 8, 12), dataFine: new Date(2025, 1, 16), img: "../assets/img/vangogh.png"},
    {id: 6 ,nomeMostra:"Monet e la Luce: Immersione nell'Impressionismo", nomeArtista: "Claude Monet", descrizione:"Entra nel mondo di Claude Monet, padre dell'Impressionismo, in questa mostra immersiva. ", dataInizio: new Date(2024, 10, 14), dataFine: new Date(2025, 2, 25), img: "../assets/img/monet.png"},
    {id: 7 ,nomeMostra:"Pittrice Ribelle e Rivoluzionaria", nomeArtista: "Artemisia Gentileschi", descrizione:"Scopri la vita straordinaria e l'opera rivoluzionaria di Artemisia Gentileschi, una delle pittrici barocche più importanti d'Italia.", dataInizio: new Date(2024, 3, 18), dataFine: new Date(2024, 9, 17), img: "../assets/img/artemisia.png"}
  ]

  mostre1: any = [
    {id: 1 ,nomeOpera1:"Autoritratto con Collana di Spine e Colibrì", nomeArtista1: "Frida Kahlo", descrizione1:"Un autoritratto iconico di Frida Kahlo, che indossa una collana di spine e un colibrì, simboli del suo dolore e della sua forza interiore.", img1: "../assets/img/fridaO1.png", nomeOpera2:"Le Due Frida", nomeArtista2: "Frida Kahlo", descrizione2:"Un dipinto che rappresenta Frida Kahlo divisa in due, con due cuori e due abiti diversi, che simboleggia il dualismo della sua personalità e la sua eredità culturale.", img2:"../assets/img/fridaO2.png"},
  ]

  mostre2: any = [
    {id: 2 ,nomeOpera1:"La Fornarina", nomeArtista1: "Raffaello Sanzio", descrizione1:"Un ritratto sensuale di Margherita Luti, la musa ispiratrice di Raffaello, considerato uno dei suoi capolavori.", img1: "../assets/img/sanzioO1.png", nomeOpera2:"Galatea", nomeArtista2: "Raffaello Sanzio", descrizione2:"Un affresco che rappresenta la ninfa marina Galatea che emerge dal mare e viene corteggiata dal dio del mare Tritone, un'opera che celebra la bellezza e l'amore.", img2: "../assets/img/sanzioO2.png"}
  ]

  mostre3: any = [
    {id: 3 ,nomeOpera1:"Vocazione di San Matteo", nomeArtista1: "Caravaggio", descrizione1:"Un dipinto che raffigura il momento in cui Gesù chiama Matteo a seguirlo, caratterizzato dall'uso drammatico della luce e delle ombre, tipico di Caravaggio.", img1: "../assets/img/caravaggioO1.png", nomeOpera2:"Medusa ", nomeArtista2: "Caravaggio", descrizione2:"Un dipinto che rappresenta la testa mozzata di Medusa, con un realismo crudo e un'espressione di terrore che cattura l'orrore della scena.", img2: "../assets/img/caravaggioO2"}
  ]

  mostre4: any = [
    {id: 4 ,nomeOpera1:"Il Bacio", nomeArtista1: "Gustav Klimt", descrizione1:"L'opera più famosa di Klimt, che rappresenta due amanti che si baciano avvolti in un vortice di decorazioni dorate, un'icona dell'Art Nouveau.", img1: "../assets/img/klimtO1.png", nomeOpera2:"Giuditta II", nomeArtista2: "Gustav Klimt", descrizione2:"Un dipinto che raffigura Giuditta con la testa di Oloferne, caratterizzato da una sensuale femminilità e da un uso audace di colori e motivi decorativi.", img2: "../assets/img/kilmtO2.png"}
  ]

  mostre5: any = [
    {id: 5 ,nomeOpera1:"I Girasoli", nomeArtista1: "Vincent van Gogh", descrizione1:"I Girasoli è una serie di dipinti ad olio di Vincent van Gogh. Realizzati nel 1888 e 1889, raffigurano mazzi di girasoli in vaso. I Girasoli sono tra le opere più iconiche di van Gogh e sono considerati un capolavoro del post-impressionismo. Van Gogh usò i girasoli per esprimere la felicità e la gioia di vivere.", img1: "../assets/img/goghO1.png",nomeOpera2:"La Notte Stellata", nomeArtista2: "Vincent van Gogh", descrizione2:"La Notte Stellata è un dipinto ad olio di Vincent van Gogh. Realizzato nel 1889, raffigura la vista notturna dalla finestra della sua stanza in manicomio a Saint-Rémy-de-Provence. La Notte Stellata è una delle opere più famose di van Gogh ed è considerata un capolavoro del post-impressionismo.", img2: "../assets/img/goghO2.png"}
  ]

  mostre6: any = [
    {id: 6 ,nomeOpera1:"Impressione, levar del sole", nomeArtista1: "Claude Monet", descrizione1:"Impressione, levar del sole è un dipinto ad olio di Claude Monet. Realizzato nel 1872, raffigura il porto di Le Havre al mattino presto. Impressione, levar del sole è considerata l'opera che ha dato il nome al movimento impressionista. Monet usò Impressione, levar del sole per catturare un'impressione fugace del momento.", img1: "../assets/img/monetO1.png", nomeOpera2:"Le ninfee", nomeArtista2: "Claude Monet", descrizione2:" Le ninfee è una serie di dipinti ad olio di Claude Monet. Realizzati tra il 1899 e il 1926, raffigurano il giardino d'acqua della casa di Monet a Giverny. Le ninfee sono tra le opere più famose di Monet e sono considerate un capolavoro dell'impressionismo. I dipinti sono caratterizzati dai loro colori delicati e dalla loro atmosfera pacifica. Monet usò Le ninfee per esplorare la bellezza della natura e il passare del tempo.", img2: "../assets/img/monetO2.png"}
  ]

  mostre7: any = [
    {id: 7 ,nomeOpera1:"Giuditta e Oloferne", nomeArtista1: "Artemisia Gentileschi", descrizione1:"Giuditta e Oloferne è un dipinto ad olio di Artemisia Gentileschi. Realizzato tra il 1612 e il 1613, raffigura la scena biblica di Giuditta che decapita Oloferne, il generale assiro che assediava la sua città natale. Giuditta e Oloferne è una delle opere più famose di Gentileschi ed è considerata un capolavoro del Barocco.", img1: "../assets/img/artemisinaO1.png", nomeOpera2:"Susanna e i vecchioni", nomeArtista2: "Artemisia Gentileschi", descrizione2:"Susanna e i vecchioni è un dipinto ad olio di Artemisia Gentileschi. Realizzato circa nel 1610, raffigura la scena biblica di Susanna che viene spiata da due vecchioni mentre fa il bagno. Susanna e i vecchioni è una delle prime opere importanti di Gentileschi ed è considerata un esempio del suo stile caravaggesco.", img2: "../assets/img/artemisinaO2.png"}
  ]

  constructor() { }
}
