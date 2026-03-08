import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { IFlagStore } from './product-store.types'

export const useFlagStore = create<IFlagStore>()(
	persist(
		set => ({
			favoriteIds: [],
			comparedIds: [],

			toggleFavorite: id =>
				set(state => ({
					favoriteIds: state.favoriteIds.includes(id)
						? state.favoriteIds.filter(x => x !== id)
						: [...state.favoriteIds, id],
				})),

			toggleCompared: id =>
				set(state => ({
					comparedIds: state.comparedIds.includes(id)
						? state.comparedIds.filter(x => x !== id)
						: [...state.comparedIds, id],
				})),

			isFavorite: id => {
				const state = undefined as unknown as IFlagStore
				return state.favoriteIds.includes(id)
			},

			isCompared: id => {
				const state = undefined as unknown as IFlagStore
				return state.comparedIds.includes(id)
			},
		}),
		{ name: 'flags-storage' },
	),
)
