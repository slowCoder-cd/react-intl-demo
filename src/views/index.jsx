import react, { useContext} from 'react'
import { mainContext } from '../reducer'
import { FormattedMessage } from 'react-intl'
 
function Index() {
    const { dispatch, state } = useContext(mainContext)
    const { locale } = state
    const changeLang = () => { // 改变状态里的 语言 进行切换
        dispatch({
            type: 'CHANGE_LOCALE',
            locale: locale === 'zh' ? 'en' : 'zh'
        })
    }
    return (
        <div>
           <div>
            <FormattedMessage id="start" ></FormattedMessage>
           </div>
           <div>
                <button onClick={changeLang} > <FormattedMessage id="switch" ></FormattedMessage></button>
           </div>
           <div>
               {/* 加变量也可以 */}
            <FormattedMessage id="say" values={{ name: 'tom' } } ></FormattedMessage>
           </div>
        </div>
    );
}
export default Index;
