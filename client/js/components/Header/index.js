import React from 'react'
import CartPreview from 'components/CartPreview'
import AccountMenu from 'components/AccountMenu'
import UniversalLink from 'components/UniversalLink'

const logoUrl = require('./logo.png')

export default (props) => {
  const { account, cart } = props
  return (
    <header>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <UniversalLink to="/">
              <img src={logoUrl} />
            </UniversalLink>
          </div>
          <div id="#navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <UniversalLink to={Routes.spree_products_path()}>
                  {I18n.t('spree.products')}
                </UniversalLink>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                {!account.isFetching && <AccountMenu account={account} />}
              </li>
              <li>
                {!cart.isFetching && <CartPreview cart={cart} />}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
