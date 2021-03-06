import keys from '@i18n/keys'
import {
  DEVELOPER_TAG,
  DESIGN_AND_MARKETING_TAG,
  SOCIAL_TEAM_TAG,
} from '@constants'

import MichelCohenImage from '@assets/images/michel_cohen.png'
import DavidMazzitelliImage from '@assets/images/david_mazzitelli.png'
import LucianoBraccoImage from '@assets/images/luciano_bracco.png'
import NicolasAyalaImage from '@assets/images/nicolas_ayala.png'
import CarolinaGhisolfiImage from '@assets/images/carolina_ghisolfi.png'
import AlbaFuentesImage from '@assets/images/alba_fuentes.png'
import NicolasManziniImage from '@assets/images/nicolas_manzini.png'
import MicaelaGarciaImage from '@assets/images/micaela_garcia.png'
import BarbaraFernandezImage from '@assets/images/barbara_fernandez.png'
import CelinaGrauBaenaImage from '@assets/images/celina_grau_baena.png'
import DiegoGilImage from '@assets/images/diego_gil.png'
import JuanCruzGurruchagaImage from '@assets/images/juan_cruz_gurruchaga.png'
import POILogoFiller from '@assets/images/our_team__poi_logo_table_filler.png'
import POILogoFiller2 from '@assets/images/our_team__poi_logo_table_filler2.png'
import ColorFiller1 from '@assets/images/our_team__colors_1_table_filler.png'
import ColorFiller2 from '@assets/images/our_team__colors_2_table_filler.png'
import ColorFiller3 from '@assets/images/our_team__colors_3_table_filler.png'
import ColorFiller4 from '@assets/images/our_team__colors_4_table_filler.png'
import GabrielMauasImage from '@assets/images/grabriel_mauas.png'
import FabianBaezImage from '@assets/images/fabian_baez.png'
import AlfonsoCampenniImage from '@assets/images/alfonso_campenni.png'
import AgustinCapdevillaImage from '@assets/images/agustin_capdevilla.png'
import MariaPazPaniegoImage from '@assets/images/maria_paz_paniego.png'
import JoaquinVilaMoretImage from '@assets/images/joaquin_vila_moret.png'

import { ICard, IPerson } from '@constants/types'

export const POI_LOGO_ITEM = {
  name: 'POILogoFiller',
  imagePath: POILogoFiller,
}

export default [
  {
    imagePath: MichelCohenImage,
    name: 'Michel Cohen',
    role: keys.ourTeam.roles.founderAndDirector,
    tags: [DEVELOPER_TAG, SOCIAL_TEAM_TAG, DESIGN_AND_MARKETING_TAG],
  },
  {
    imagePath: DavidMazzitelliImage,
    name: 'David Mazzitelli',
    role: keys.ourTeam.roles.leadSolidityDeveloper,
    tags: [DEVELOPER_TAG],
  },
  {
    imagePath: LucianoBraccoImage,
    name: 'Luciano Bracco',
    role: keys.ourTeam.roles.leadFrontendDeveloper,
    tags: [DEVELOPER_TAG],
  },
  {
    imagePath: NicolasAyalaImage,
    name: 'Nicol??s Ayala',
    role: keys.ourTeam.roles.srSolidityDeveloper,
    tags: [DEVELOPER_TAG],
  },
  {
    imagePath: CarolinaGhisolfiImage,
    name: 'Carolina Ghisolfi',
    role: keys.ourTeam.roles.uxuiDesigner,
    tags: [DESIGN_AND_MARKETING_TAG],
  },
  {
    imagePath: GabrielMauasImage,
    name: 'Gabriel Mauas',
    role: keys.ourTeam.roles.frontendDeveloper,
    tags: [DESIGN_AND_MARKETING_TAG],
  },
  POI_LOGO_ITEM,
  {
    name: 'ColorFiller1',
    imagePath: ColorFiller1,
  },
  {
    imagePath: AlbaFuentesImage,
    name: 'Alba Fuentes',
    role: keys.ourTeam.roles.copywriter,
    tags: [DESIGN_AND_MARKETING_TAG],
  },
  {
    imagePath: NicolasManziniImage,
    name: 'Nicol??s Manzini',
    role: keys.ourTeam.roles.marketingSpecialist,
    tags: [DESIGN_AND_MARKETING_TAG],
  },
  {
    imagePath: MicaelaGarciaImage,
    name: 'Micaela Garc??a',
    role: keys.ourTeam.roles.socialMedia,
    tags: [DESIGN_AND_MARKETING_TAG],
  },
  {
    name: 'ColorFiller2',
    imagePath: ColorFiller2,
  },
  {
    imagePath: BarbaraFernandezImage,
    name: 'B??rbara Fern??ndez',
    role: keys.ourTeam.roles.institutionalRelations,
    tags: [SOCIAL_TEAM_TAG],
  },
  {
    imagePath: CelinaGrauBaenaImage,
    name: 'Celina Grau Baena',
    role: keys.ourTeam.roles.socialTeam,
    tags: [SOCIAL_TEAM_TAG],
  },
  {
    imagePath: DiegoGilImage,
    name: 'Diego Gil',
    role: keys.ourTeam.roles.socialTeam,
    tags: [SOCIAL_TEAM_TAG],
  },
  {
    imagePath: JuanCruzGurruchagaImage,
    name: 'Juan Cruz Gurruchaga',
    role: keys.ourTeam.roles.fundraisingStrategy,
    tags: [SOCIAL_TEAM_TAG],
  },

  {
    imagePath: FabianBaezImage,
    name: 'Fabi??n Baez',
    role: keys.ourTeam.roles.territorialDevelopment,
    tags: [SOCIAL_TEAM_TAG],
  },
  {
    imagePath: AlfonsoCampenniImage,
    name: 'Alfonso Campenni',
    role: keys.ourTeam.roles.socialTeam,
    tags: [SOCIAL_TEAM_TAG],
  },

  {
    imagePath: AgustinCapdevillaImage,
    name: 'Agust??n Capdevilla',
    role: keys.ourTeam.roles.socialTeam,
    tags: [SOCIAL_TEAM_TAG],
  },
  {
    imagePath: MariaPazPaniegoImage,
    name: 'Mar??a Paz Paniego',
    role: keys.ourTeam.roles.communicationsTeam,
    tags: [SOCIAL_TEAM_TAG],
  },
  {
    name: 'ColorFiller3',
    imagePath: ColorFiller3,
  },
  {
    name: 'ColorFiller4',
    imagePath: ColorFiller4,
  },
  {
    imagePath: JoaquinVilaMoretImage,
    name: 'Joaqu??n Vila Moret',
    role: keys.ourTeam.roles.communicationsTeam,
    tags: [SOCIAL_TEAM_TAG],
  },
  {
    name: 'POILogoFiller2',
    imagePath: POILogoFiller2,
  },
] as (IPerson | ICard)[]
