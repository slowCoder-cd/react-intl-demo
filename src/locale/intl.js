import React, { useContext } from 'react'
import { IntlProvider } from 'react-intl' // 包裹在需要语言国际化的组件的最外层，和react-redux的Provider一样 让组件和组件内的子组件都能使用react-intl提供的api和方法
import { mainContext } from '../reducer' // 这里使用的是useReducer 简单的在根目录下创建一个 来控制语言的全局状态维护
import zh_CN from './cn' // 中文包
import en_US from './en' // 英文包

const Inter = (props) => {
    // 获取默认的语言设置 也可以配合一些全局状态管理进行结合使用 如redux Mobx或者react自身提供的useReducer等
  const { state } = useContext(mainContext)
  const chooseLocale = (val) => { 
    let _val = val || navigator.language.split('_')[0]
    switch (_val) {
      case 'en':
        return en_US
      case 'zh':
        return zh_CN
      default:
        return zh_CN
    }
  }
  let locale = state.locale // 获取 locale
  let { children } = props
  // 包裹子组件 让子组件共享react-intl的api 实现多语言
  return (
    <IntlProvider
      key={locale}
      locale={locale}
      defaultLocale='zh'
      messages={chooseLocale(locale)}
    >
      {children}
    </IntlProvider>
  )
}

export default Inter