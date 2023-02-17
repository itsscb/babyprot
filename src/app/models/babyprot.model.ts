export interface Child {
    Name: string;
    Geburtstag: Date
}

export interface Protocol {
    timestamp: Date
    AufwachzeitMorgens: Date;
    Aufgeweckt: boolean;
    Mittagsschlaf: boolean;
    MittagsschlafBegin: Date;
    MittagsschlafEnde: Date;
    Befinden: string;
    AktivitaetVorSchlafenszeit: string;
    SchlafRitualBeginn: Date;
    SchlafRitualEnde: Date;
    SchlafRitualKommentar: string;
    AktivitaetNachSchlafenszeit: string;
    EinschlafzeitNachRitual: Date;
    NaechtlichesAufwachen: string;
    AuffaelligkeitenImSchlaf: string;
    SchlafDauerNacht: number;
    SchlafDauerGesamt: number;
    Kind: Child
}


