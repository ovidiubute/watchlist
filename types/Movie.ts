import BoardRating from "./BoardRating";
import ImdbMetadata from "./ImdbMetadata";
import PeerRating from "./PeerRating";

export default interface Movie {
    readonly title: string;
    readonly year: number;
    readonly rated?: BoardRating;
    readonly runtime: number;
    readonly plot?: string;
    readonly released?: number;
    readonly genre?: string;
    readonly genres: Array<string>;
    readonly director?: string;
    readonly writers: Array<string>;
    readonly imdbMetadata: ImdbMetadata;
    readonly ratings: Array<PeerRating>;
    readonly metaScore?: string;
    readonly dvdRelease?: number;
    readonly boxOffice?: string;
    readonly productionCompany?: string;
    readonly website?: string;
    readonly languages: Array<string>;
    readonly countries: Array<string>;
    readonly posterURL?: string;
    readonly awards?: string;
    readonly actors: Array<string>;
};
