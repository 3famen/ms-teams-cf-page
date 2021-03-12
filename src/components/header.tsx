import React from 'react';
import { connect } from 'react-redux';
import { Text, FontWeights, IconButton } from 'office-ui-fabric-react';
import { AppState } from '../RootReducer';
import { Dispatch } from 'redux';
import { SIGNOUT_COMMAND } from '../auth/actions';
import { translate } from '../localization/translate';

interface HeaderProps {
  onSignOut: () => void;
}

const mapStateToProps = (state: AppState) => ({} as Partial<HeaderProps>);

const mapDispatchToProps = (dispatch: Dispatch) =>
  ({
    onSignOut: () => {
      dispatch({
        type: SIGNOUT_COMMAND
      });
    }
  } as Partial<HeaderProps>);

const boldStyle = { root: { fontWeight: FontWeights.bold } };

function HeaderComponent(props: Partial<HeaderProps>) {
  const onSignOut = props.onSignOut ?? (() => {});

  return (
    <div className="header">
      <div className="headerLogo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2228.833 2073.333">
          <path
            fill="#5059C9"
            d="M1554.637 777.5h575.713c54.391 0 98.483 44.092 98.483 98.483v524.398c0 199.901-162.051 361.952-361.952 361.952h-1.711c-199.901.028-361.975-162-362.004-361.901V828.971c.001-28.427 23.045-51.471 51.471-51.471z"
          />
          <circle fill="#5059C9" cx="1943.75" cy="440.583" r="233.25" />
          <circle fill="#7B83EB" cx="1218.083" cy="336.917" r="336.917" />
          <path
            fill="#7B83EB"
            d="M1667.323 777.5H717.01c-53.743 1.33-96.257 45.931-95.01 99.676v598.105c-7.505 322.519 247.657 590.16 570.167 598.053 322.51-7.893 577.671-275.534 570.167-598.053V877.176c1.245-53.745-41.268-98.346-95.011-99.676z"
          />
          <path
            opacity=".1"
            d="M1244 777.5v838.145c-.258 38.435-23.549 72.964-59.09 87.598a91.856 91.856 0 01-35.765 7.257H667.613c-6.738-17.105-12.958-34.21-18.142-51.833a631.287 631.287 0 01-27.472-183.49V877.02c-1.246-53.659 41.198-98.19 94.855-99.52H1244z"
          />
          <path
            opacity=".2"
            d="M1192.167 777.5v889.978a91.838 91.838 0 01-7.257 35.765c-14.634 35.541-49.163 58.833-87.598 59.09H691.975c-8.812-17.105-17.105-34.21-24.362-51.833-7.257-17.623-12.958-34.21-18.142-51.833a631.282 631.282 0 01-27.472-183.49V877.02c-1.246-53.659 41.198-98.19 94.855-99.52h475.313z"
          />
          <path
            opacity=".2"
            d="M1192.167 777.5v786.312c-.395 52.223-42.632 94.46-94.855 94.855h-447.84A631.282 631.282 0 01622 1475.177V877.02c-1.246-53.659 41.198-98.19 94.855-99.52h475.312z"
          />
          <path
            opacity=".2"
            d="M1140.333 777.5v786.312c-.395 52.223-42.632 94.46-94.855 94.855H649.472A631.282 631.282 0 01622 1475.177V877.02c-1.246-53.659 41.198-98.19 94.855-99.52h423.478z"
          />
          <path
            opacity=".1"
            d="M1244 509.522v163.275c-8.812.518-17.105 1.037-25.917 1.037-8.812 0-17.105-.518-25.917-1.037a284.472 284.472 0 01-51.833-8.293c-104.963-24.857-191.679-98.469-233.25-198.003a288.02 288.02 0 01-16.587-51.833h258.648c52.305.198 94.657 42.549 94.856 94.854z"
          />
          <path
            opacity=".2"
            d="M1192.167 561.355v111.442a284.472 284.472 0 01-51.833-8.293c-104.963-24.857-191.679-98.469-233.25-198.003h190.228c52.304.198 94.656 42.55 94.855 94.854z"
          />
          <path
            opacity=".2"
            d="M1192.167 561.355v111.442a284.472 284.472 0 01-51.833-8.293c-104.963-24.857-191.679-98.469-233.25-198.003h190.228c52.304.198 94.656 42.55 94.855 94.854z"
          />
          <path
            opacity=".2"
            d="M1140.333 561.355v103.148c-104.963-24.857-191.679-98.469-233.25-198.003h138.395c52.305.199 94.656 42.551 94.855 94.855z"
          />
          <linearGradient
            id="a"
            gradientUnits="userSpaceOnUse"
            x1="198.099"
            y1="1683.073"
            x2="942.234"
            y2="394.261"
            gradientTransform="matrix(1 0 0 -1 0 2075.333)"
          >
            <stop offset="0" style={{ stopColor: '#5a62c3' }} />
            <stop offset=".5" style={{ stopColor: '#4d55bd' }} />
            <stop offset="1" style={{ stopColor: '#3940ab' }} />
          </linearGradient>
          <path
            fill="url(#a)"
            d="M95.01 466.5h950.312c52.473 0 95.01 42.538 95.01 95.01v950.312c0 52.473-42.538 95.01-95.01 95.01H95.01c-52.473 0-95.01-42.538-95.01-95.01V561.51c0-52.472 42.538-95.01 95.01-95.01z"
          />
          <path
            fill="#FFF"
            d="M820.211 828.193h-189.97v517.297h-121.03V828.193H320.123V727.844h500.088v100.349z"
          />
        </svg>
      </div>

      <div>
        <Text variant="xLarge" styles={boldStyle}>
          Microsoft Teams
        </Text>
      </div>

      <div className="headerIcon">
        <IconButton
          onClick={() => onSignOut()}
          iconProps={{ iconName: 'Leave' }}
          title={translate('header.signout.title')}
          ariaLabel={translate('header.signout.ariaLabel')}
        />
      </div>
    </div>
  );
}

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);
