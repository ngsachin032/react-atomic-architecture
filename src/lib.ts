
import * as Components from './components'
import * as Composites from './composites'
import * as Elements from './elements'
import * as Pages from './pages'
import * as Inc from './inc'

(window as any).ZetaCMSUI = {
  ...Components,
  ...Composites,
  ...Elements,
  ...Pages,
  ...Inc
}
