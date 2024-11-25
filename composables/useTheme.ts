import {computed} from 'vue'
import  {useThemeStore} from '../src/store/useThemeStore'

export const useTheme =():boolean =>{

    const theme = useThemeStore()
    let state = computed<boolean>(()=>{ return theme.getTheme })

    return state.value
}