import dynamicLinks, {
  FirebaseDynamicLinksTypes,
} from '@react-native-firebase/dynamic-links';

export type Link = FirebaseDynamicLinksTypes.DynamicLink;

export function onLink(handleDynamicLink: (link: Link) => void) {
  return dynamicLinks().onLink(handleDynamicLink);
}

export async function onInitialLink(
  handleDynamicLink: (link: Link) => void,
  unsubscribed: false,
) {
  const initialLink = await dynamicLinks().getInitialLink();

  if (initialLink && !unsubscribed) {
    handleDynamicLink(initialLink);
  }
}
