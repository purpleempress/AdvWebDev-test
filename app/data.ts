export interface IndustryIdentifier {
  type: string;
  identifier: string;
}

export interface ReadingModes {
  text: boolean;
  image: boolean;
}

export interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface VolumeInfo {
  title: string;
  subtitle?: string; // Optional field
  authors: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  industryIdentifiers?: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount?: number;
  printType: string;
  categories?: string[];
  averageRating?: number;
  ratingsCount?: number;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary?: PanelizationSummary;
  comicsContent?: boolean; // Optional field
  imageLinks?: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

export interface Price {
  amount: number;
  currencyCode: string;
}

export interface PriceInMicros {
  amountInMicros: number;
  currencyCode: string;
}

export interface Offer {
  finskyOfferType: number;
  listPrice: PriceInMicros;
  retailPrice: PriceInMicros;
  giftable?: boolean;
}

export interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
  listPrice?: Price;
  retailPrice?: Price;
  buyLink?: string;
  offers?: Offer[];
}

export interface DownloadLink {
  isAvailable: boolean;
  acsTokenLink?: string;
}

export interface AccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: DownloadLink;
  pdf: DownloadLink;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}

export interface SearchInfo {
  textSnippet?: string;
}

export interface VolumeItem {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo?: SearchInfo;
}

export interface GoogleBooksResponse {
  kind: string;
  totalItems: number;
  items: VolumeItem[];
}

// ----------------------------------------------------------------------
// Exported Data with TypeScript Typing
// ----------------------------------------------------------------------

export const data: GoogleBooksResponse = {
  kind: "books#volumes",
  totalItems: 2113,
  items: [
    {
      kind: "books#volume",
      id: "7bmW-U3w8d8C",
      etag: "kXDkQlbQe2g",
      selfLink: "https://www.googleapis.com/books/v1/volumes/7bmW-U3w8d8C",
      volumeInfo: {
        title: "Who Is J.K. Rowling?",
        authors: ["Pam Pollack", "Meg Belviso", "Who HQ"],
        publisher: "Penguin",
        publishedDate: "2012-08-02",
        description:
          "Everyone loves Harry Potter. Now kids can learn about Harry's creator! In 1995, on a four-hour-delayed train from Manchester to London, J. K. Rowling conceived of the idea of a boy wizard named Harry Potter. Upon arriving in London, she began immediately writing the first book in the saga. Rowling's true-life, rags-to-riches story is as compelling as the world of Hogwarts that she created. This biography details not only Rowling's life and her love of literature but the story behind the creation of a modern classic.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781101575628",
          },
          {
            type: "ISBN_10",
            identifier: "110157562X",
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 112,
        printType: "BOOK",
        categories: ["Juvenile Nonfiction"],
        averageRating: 4,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "0.7.9.0.preview.2",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=7bmW-U3w8d8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=7bmW-U3w8d8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.uk/books?id=7bmW-U3w8d8C&printsec=frontcover&dq=jk+rowling&hl=&cd=1&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=7bmW-U3w8d8C&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=7bmW-U3w8d8C",
      },
      saleInfo: {
        country: "GB",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 5.05,
          currencyCode: "GBP",
        },
        retailPrice: {
          amount: 5.05,
          currencyCode: "GBP",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=7bmW-U3w8d8C&rdid=book-7bmW-U3w8d8C&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 5050000,
              currencyCode: "GBP",
            },
            retailPrice: {
              amountInMicros: 5050000,
              currencyCode: "GBP",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "GB",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.uk/books/download/Who_Is_J_K_Rowling-sample-epub.acsm?id=7bmW-U3w8d8C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=7bmW-U3w8d8C&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Rowling&#39;s true-life, rags-to-riches story is as compelling as the world of Hogwarts that she created. This biography details not only Rowling&#39;s life and her love of literature but the story behind the creation of a modern classic.",
      },
    },
    {
      kind: "books#volume",
      id: "gvfuDwAAQBAJ",
      etag: "LM+AbJ2fadA",
      selfLink: "https://www.googleapis.com/books/v1/volumes/gvfuDwAAQBAJ",
      volumeInfo: {
        title: "The Ickabog",
        subtitle:
          "A warm and witty fairy-tale adventure to entertain the whole family",
        authors: ["J.K. Rowling"],
        publisher: "Hachette UK",
        publishedDate: "2020-11-10",
        description:
          "The Ickabog is coming... A mythical monster, a kingdom in peril, an adventure that will test two children's bravery to the limit. Discover a brilliantly original fairy tale about the power of hope and friendship to triumph against all odds, from one of the world's best storytellers. The kingdom of Cornucopia was once the happiest in the world. It had plenty of gold, a king with the finest moustaches you could possibly imagine, and butchers, bakers and cheesemongers whose exquisite foods made a person dance with delight when they ate them. Everything was perfect - except for the misty Marshlands to the north which, according to legend, were home to the monstrous Ickabog. Anyone sensible knew that the Ickabog was just a myth, to scare children into behaving. But the funny thing about myths is that sometimes they take on a life of their own. Could a myth unseat a beloved king? Could a myth bring a once happy country to its knees? Could a myth thrust two children into an adventure they didn't ask for and never expected? If you're feeling brave, step into the pages of this book to find out... A beautiful digital edition, brought to life with full-colour illustrations by the young winners of The Ickabog competition.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781510202269",
          },
          {
            type: "ISBN_10",
            identifier: "1510202269",
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 355,
        printType: "BOOK",
        categories: ["Juvenile Fiction"],
        averageRating: 5,
        ratingsCount: 2,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.1.1.0.preview.2",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=gvfuDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=gvfuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.uk/books?id=gvfuDwAAQBAJ&printsec=frontcover&dq=jk+rowling&hl=&cd=2&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=gvfuDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=gvfuDwAAQBAJ",
      },
      saleInfo: {
        country: "GB",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 4.99,
          currencyCode: "GBP",
        },
        retailPrice: {
          amount: 4.99,
          currencyCode: "GBP",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=gvfuDwAAQBAJ&rdid=book-gvfuDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 4990000,
              currencyCode: "GBP",
            },
            retailPrice: {
              amountInMicros: 4990000,
              currencyCode: "GBP",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "GB",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.uk/books/download/The_Ickabog-sample-epub.acsm?id=gvfuDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=gvfuDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "If you&#39;re feeling brave, step into the pages of this book to find out... A beautiful digital edition, brought to life with full-colour illustrations by the young winners of The Ickabog competition.",
      },
    },
    {
      kind: "books#volume",
      id: "oNAzDwAAQBAJ",
      etag: "Na6Vn8ccN9w",
      selfLink: "https://www.googleapis.com/books/v1/volumes/oNAzDwAAQBAJ",
      volumeInfo: {
        title: "J.K. Rowling: A Bibliography",
        subtitle: "Updated Edition",
        authors: ["Philip W. Errington"],
        publisher: "Bloomsbury Publishing",
        publishedDate: "2017-09-21",
        description:
          "This is the definitive bibliography of the writings of J. K. Rowling. In addition to bibliographical details of each edition of all her books, pamphlets and original contributions to published works, there is detailed information on the publishing history of her work, including fascinating extracts from correspondence, and information on Rowling at auction. This edition has been fully revised and updated to include over 50 new editions published since 2013, including the newly jacketed 2014 children's editions of the Harry Potter books as well as the 2015 illustrated edition of Harry Potter and the Philosopher's Stone. The works of Robert Galbraith are also included.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781474297387",
          },
          {
            type: "ISBN_10",
            identifier: "1474297382",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 736,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.1.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=oNAzDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=oNAzDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.uk/books?id=oNAzDwAAQBAJ&printsec=frontcover&dq=jk+rowling&hl=&cd=3&source=gbs_api",
        infoLink:
          "http://books.google.co.uk/books?id=oNAzDwAAQBAJ&dq=jk+rowling&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/J_K_Rowling_A_Bibliography.html?hl=&id=oNAzDwAAQBAJ",
      },
      saleInfo: {
        country: "GB",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "GB",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.uk/books/download/J_K_Rowling_A_Bibliography-sample-epub.acsm?id=oNAzDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.uk/books/download/J_K_Rowling_A_Bibliography-sample-pdf.acsm?id=oNAzDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=oNAzDwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This is the definitive bibliography of the writings of J. K. Rowling.",
      },
    },
    {
      kind: "books#volume",
      id: "m_u_DwAAQBAJ",
      etag: "caHGumL3YGM",
      selfLink: "https://www.googleapis.com/books/v1/volumes/m_u_DwAAQBAJ",
      volumeInfo: {
        title: "101 Amazing Facts about J.K. Rowling",
        subtitle: "...and Harry Potter",
        authors: ["Holger Weßling", "Archie Thomas"],
        publisher: "Andrews UK Limited",
        publishedDate: "2019-11-18",
        description:
          "We've all read - and loved - the adventures of Harry Potter and his friends in the Wizarding World. But what of the genius behind it all, J.K. Rowling? Was getting the first book published easy for her, or was it a long struggle? How did she come up with so many amazing ideas for the books? How did her own life influence the characters in the series, both good and bad? And what about her life away from magic and mystery? This fascinating book reveals over one hundred amazing facts about the author, numbered and organised into easy-to-read categories. Whether you simply enjoy a good biography, or are the wor's most dedicated Harry Potter fan, this is the perfect book for you!",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781789821826",
          },
          {
            type: "ISBN_10",
            identifier: "1789821827",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 24,
        printType: "BOOK",
        categories: ["Biography & Autobiography"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=m_u_DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=m_u_DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.uk/books?id=m_u_DwAAQBAJ&printsec=frontcover&dq=jk+rowling&hl=&cd=4&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=m_u_DwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=m_u_DwAAQBAJ",
      },
      saleInfo: {
        country: "GB",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2.49,
          currencyCode: "GBP",
        },
        retailPrice: {
          amount: 2.49,
          currencyCode: "GBP",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=m_u_DwAAQBAJ&rdid=book-m_u_DwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2490000,
              currencyCode: "GBP",
            },
            retailPrice: {
              amountInMicros: 2490000,
              currencyCode: "GBP",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "GB",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.uk/books/download/101_Amazing_Facts_about_J_K_Rowling-sample-epub.acsm?id=m_u_DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.uk/books/download/101_Amazing_Facts_about_J_K_Rowling-sample-pdf.acsm?id=m_u_DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=m_u_DwAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Was getting the first book published easy for her, or was it a long struggle? How did she come up with so many amazing ideas for the books? How did her own life influence the characters in the series, both good and bad?",
      },
    },
    {
      kind: "books#volume",
      id: "7nmbhwH-q6IC",
      etag: "yxueYIBM7p4",
      selfLink: "https://www.googleapis.com/books/v1/volumes/7nmbhwH-q6IC",
      volumeInfo: {
        title: "J. K. Rowling",
        authors: ["Cari Meister"],
        publisher: "ABDO",
        publishedDate: "2001",
        description:
          "Traces the childhood, education, and career of J.K. Rowling.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "157765482X",
          },
          {
            type: "ISBN_13",
            identifier: "9781577654827",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 28,
        printType: "BOOK",
        categories: ["Juvenile Nonfiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.4.5.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=7nmbhwH-q6IC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=7nmbhwH-q6IC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.uk/books?id=7nmbhwH-q6IC&printsec=frontcover&dq=jk+rowling&hl=&cd=5&source=gbs_api",
        infoLink:
          "http://books.google.co.uk/books?id=7nmbhwH-q6IC&dq=jk+rowling&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/J_K_Rowling.html?hl=&id=7nmbhwH-q6IC",
      },
      saleInfo: {
        country: "GB",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "GB",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.uk/books/download/J_K_Rowling-sample-epub.acsm?id=7nmbhwH-q6IC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.uk/books/download/J_K_Rowling-sample-pdf.acsm?id=7nmbhwH-q6IC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=7nmbhwH-q6IC&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Traces the childhood, education, and career of J.K. Rowling.",
      },
    },
    {
      kind: "books#volume",
      id: "NUi1HtrERmYC",
      etag: "pzQ12qLh1mo",
      selfLink: "https://www.googleapis.com/books/v1/volumes/NUi1HtrERmYC",
      volumeInfo: {
        title: "The Secret of Platform 13",
        authors: ["Eva Ibbotson"],
        publisher: "Pan Macmillan",
        publishedDate: "2008-09-04",
        description:
          "Under Platform 13 at King's Cross Station there is a secret door that leads to a magical island . . . It appears only once every nine years. And when it opens, four mysterious figures step into the streets of London. A wizard, an ogre, a fey and a young hag have come to find the prince of their kingdom, stolen as a baby nine years before. But the prince has become a horrible rich boy called Raymond Trottle, who doesn't understand magic and is determined not to be rescued. Shortlisted for the Smarties Prize, The Secret of Platform 13 is an exciting magical adventure from Eva Ibbotson, the award-winning author of Journey to the River Sea. 'This kind of fun will never fail to delight' Philip Pullman",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9780330477697",
          },
          {
            type: "ISBN_10",
            identifier: "0330477692",
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 208,
        printType: "BOOK",
        categories: ["Juvenile Fiction"],
        averageRating: 3,
        ratingsCount: 2,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "3.13.8.0.preview.2",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=NUi1HtrERmYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=NUi1HtrERmYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.uk/books?id=NUi1HtrERmYC&printsec=frontcover&dq=jk+rowling&hl=&cd=6&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=NUi1HtrERmYC&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=NUi1HtrERmYC",
      },
      saleInfo: {
        country: "GB",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2.99,
          currencyCode: "GBP",
        },
        retailPrice: {
          amount: 2.99,
          currencyCode: "GBP",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=NUi1HtrERmYC&rdid=book-NUi1HtrERmYC&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2990000,
              currencyCode: "GBP",
            },
            retailPrice: {
              amountInMicros: 2990000,
              currencyCode: "GBP",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "GB",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.uk/books/download/The_Secret_of_Platform_13-sample-epub.acsm?id=NUi1HtrERmYC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=NUi1HtrERmYC&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Shortlisted for the Smarties Prize, The Secret of Platform 13 is an exciting magical adventure from Eva Ibbotson, the award-winning author of Journey to the River Sea. &#39;This kind of fun will never fail to delight&#39; Philip Pullman",
      },
    },
    {
      kind: "books#volume",
      id: "fWqBWw5QYAMC",
      etag: "nY6McD9Vza0",
      selfLink: "https://www.googleapis.com/books/v1/volumes/fWqBWw5QYAMC",
      volumeInfo: {
        title: "J.K. Rowling",
        subtitle: "Creator of Harry Potter",
        authors: ["Cath Senker"],
        publisher: "The Rosen Publishing Group, Inc",
        publishedDate: "2011-01-15",
        description:
          "Readers will learn about J.K. Rowlings's childhood in England and the creation of the Harry Potter series.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "1448832888",
          },
          {
            type: "ISBN_13",
            identifier: "9781448832880",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 40,
        printType: "BOOK",
        categories: ["Juvenile Nonfiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.2.5.0.preview.1",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=fWqBWw5QYAMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=fWqBWw5QYAMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.uk/books?id=fWqBWw5QYAMC&printsec=frontcover&dq=jk+rowling&hl=&cd=7&source=gbs_api",
        infoLink:
          "http://books.google.co.uk/books?id=fWqBWw5QYAMC&dq=jk+rowling&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/J_K_Rowling.html?hl=&id=fWqBWw5QYAMC",
      },
      saleInfo: {
        country: "GB",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "GB",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.uk/books/download/J_K_Rowling-sample-pdf.acsm?id=fWqBWw5QYAMC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=fWqBWw5QYAMC&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Readers will learn about J.K. Rowlings&#39;s childhood in England and the creation of the Harry Potter series.",
      },
    },
    {
      kind: "books#volume",
      id: "WpkWErgxgssC",
      etag: "RdAwuRxgUgQ",
      selfLink: "https://www.googleapis.com/books/v1/volumes/WpkWErgxgssC",
      volumeInfo: {
        title: "Female Force: J.K. Rowling",
        subtitle: "J.K. Rowling",
        authors: ["Adam Gragg", "Matt Flyer"],
        publisher: "Bluewater Productions",
        publishedDate: "2009",
        description:
          "Describes the life of the British author, from her childhood influences and struggles with her personal life to becoming one of the most popular authors of her generation.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781427642288",
          },
          {
            type: "ISBN_10",
            identifier: "1427642281",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 24,
        printType: "BOOK",
        categories: ["Comics & Graphic Novels"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.2.1.0.preview.1",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        comicsContent: true,
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=WpkWErgxgssC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=WpkWErgxgssC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.uk/books?id=WpkWErgxgssC&printsec=frontcover&dq=jk+rowling&hl=&cd=8&source=gbs_api",
        infoLink:
          "http://books.google.co.uk/books?id=WpkWErgxgssC&dq=jk+rowling&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Female_Force_J_K_Rowling.html?hl=&id=WpkWErgxgssC",
      },
      saleInfo: {
        country: "GB",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "GB",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.uk/books/download/Female_Force_J_K_Rowling-sample-pdf.acsm?id=WpkWErgxgssC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=WpkWErgxgssC&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Describes the life of the British author, from her childhood influences and struggles with her personal life to becoming one of the most popular authors of her generation.",
      },
    },
    {
      kind: "books#volume",
      id: "gX2lAgAAQBAJ",
      etag: "GcrU0oxDZwA",
      selfLink: "https://www.googleapis.com/books/v1/volumes/gX2lAgAAQBAJ",
      volumeInfo: {
        title: "J. K. Rowling",
        authors: ["Colleen A. Sexton"],
        publisher: "Twenty-First Century Books",
        publishedDate: "2007-10-01",
        description:
          "Presents a biography of celebrated author, J.K. Rowling, and chronicles her life, personal and professional challenges and achievements, and how she rose from poverty to eventually set records in the publishing industry with her Harry Potter series.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9780822579496",
          },
          {
            type: "ISBN_10",
            identifier: "0822579499",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 116,
        printType: "BOOK",
        categories: ["Juvenile Nonfiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=gX2lAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=gX2lAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.uk/books?id=gX2lAgAAQBAJ&printsec=frontcover&dq=jk+rowling&hl=&cd=9&source=gbs_api",
        infoLink:
          "http://books.google.co.uk/books?id=gX2lAgAAQBAJ&dq=jk+rowling&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/J_K_Rowling.html?hl=&id=gX2lAgAAQBAJ",
      },
      saleInfo: {
        country: "GB",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "GB",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.uk/books/download/J_K_Rowling-sample-pdf.acsm?id=gX2lAgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=gX2lAgAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Presents a biography of celebrated author, J.K. Rowling, and chronicles her life, personal and professional challenges and achievements, and how she rose from poverty to eventually set records in the publishing industry with her Harry ...",
      },
    },
    {
      kind: "books#volume",
      id: "FjMbGietIZ4C",
      etag: "tKZKjHK+sUo",
      selfLink: "https://www.googleapis.com/books/v1/volumes/FjMbGietIZ4C",
      volumeInfo: {
        title: "The Casual Vacancy",
        authors: ["J.K. Rowling"],
        publisher: "Hachette UK",
        publishedDate: "2012-09-27",
        description:
          "When Barry Fairbrother dies in his early forties, the town of Pagford is left in shock. Pagford is, seemingly, an English idyll, with a cobbled market square and an ancient abbey, but what lies behind the pretty facade is a town at war. Rich at war with poor, teenagers at war with their parents, wives at war with their husbands, teachers at war with their pupils. . . Pagford is not what it first seems. And the empty seat left by Barry on the parish council soon becomes the catalyst for the biggest war the town has yet seen. Who will triumph in an election fraught with passion, duplicity and unexpected revelations? A big novel about a small town, THE CASUAL VACANCY is J.K. Rowling's first novel for adults. It is the work of a storyteller like no other.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781405519229",
          },
          {
            type: "ISBN_10",
            identifier: "1405519223",
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 480,
        printType: "BOOK",
        categories: ["Fiction"],
        averageRating: 3,
        ratingsCount: 309,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.14.15.0.preview.2",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=FjMbGietIZ4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=FjMbGietIZ4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.uk/books?id=FjMbGietIZ4C&printsec=frontcover&dq=jk+rowling&hl=&cd=10&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=FjMbGietIZ4C&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=FjMbGietIZ4C",
      },
      saleInfo: {
        country: "GB",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 4.99,
          currencyCode: "GBP",
        },
        retailPrice: {
          amount: 4.99,
          currencyCode: "GBP",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=FjMbGietIZ4C&rdid=book-FjMbGietIZ4C&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 4990000,
              currencyCode: "GBP",
            },
            retailPrice: {
              amountInMicros: 4990000,
              currencyCode: "GBP",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "GB",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.uk/books/download/The_Casual_Vacancy-sample-epub.acsm?id=FjMbGietIZ4C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=FjMbGietIZ4C&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Who will triumph in an election fraught with passion, duplicity and unexpected revelations? A big novel about a small town, THE CASUAL VACANCY is J.K. Rowling&#39;s first novel for adults. It is the work of a storyteller like no other.",
      },
    },
  ],
};
