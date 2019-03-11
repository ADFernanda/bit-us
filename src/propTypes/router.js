import PropTypes from 'prop-types'

export const locationPropType = PropTypes.shape({
  hash: PropTypes.string.isRequired,
  key: PropTypes.string, // only in createBrowserHistory and createMemoryHistory
  pathname: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  state: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
  ]), // only in createBrowserHistory and createMemoryHistory
})

export const historyPropType = PropTypes.shape({
  action: PropTypes.oneOf(['PUSH', 'REPLACE', 'POP']).isRequired,
  block: PropTypes.func.isRequired,
  canGo: PropTypes.func, // only in createMemoryHistory
  createHref: PropTypes.func.isRequired,
  entries: PropTypes.arrayOf(locationPropType), // only in createMemoryHistory
  go: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  goForward: PropTypes.func.isRequired,
  index: PropTypes.number, // only in createMemoryHistory
  length: PropTypes.number,
  listen: PropTypes.func.isRequired,
  location: locationPropType.isRequired,
  push: PropTypes.func.isRequired,
  replace: PropTypes.func.isRequired,
})

export const matchPropType = PropTypes.shape({
  isExact: PropTypes.bool,
  params: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
})

const routeShapePropType: any = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  strict: PropTypes.bool,
  sensitive: PropTypes.bool,
  component: PropTypes.func,
}
routeShapePropType.routes = PropTypes.arrayOf(PropTypes.shape(routeShapePropType))

export const routePropType = PropTypes.shape(routeShapePropType)

export default {
  locationPropType,
  historyPropType,
  matchPropType,
  routePropType,
}
