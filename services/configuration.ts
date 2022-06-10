export type AppConfiguration = {
    insightsUrl: string
}

export const getConfiguration = (): AppConfiguration => ({
    insightsUrl: 'aaa'
})