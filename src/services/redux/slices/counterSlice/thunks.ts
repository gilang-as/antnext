import { createAppAsyncThunk } from '@/services/redux/createAppAsyncThunk'
import { fetchIdentityCount } from './fetchIdentityCount'
import { selectCount } from './selectors'
import { counterSlice } from './counterSlice'
import type { ReduxThunkAction } from '@/services/redux'

export const incrementAsync = createAppAsyncThunk(
    'counter/fetchIdentityCount',
    async (amount: number) => {
        const response = await fetchIdentityCount(amount)

        // The value we return becomes the `fulfilled` action payload
        return response.data
    }
)

export const incrementIfOddAsync = (amount: number): ReduxThunkAction => (dispatch, getState) => {
            const currentValue = selectCount(getState())
            if (currentValue % 2 === 1) {
                dispatch(counterSlice.actions.incrementByAmount(amount))
            }
        }