export enum Tags {
    Bug, Feature
}
export const tagsColorMapping: Record<Tags, string> = {
    [Tags.Bug]: "red",
    [Tags.Feature]: "blue",
}