import { BlogSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const blogSection: BlogSectionType = {
  title: 'my blogs',
  blogs: [
    {
      id: getId(),
      name: 'GitHub Actions is disabled',
      url: 'https://github.com/orgs/community/discussions/137814#discussioncomment-10621069',
      img: 'https://i.postimg.cc/NLqfj6Hm/chrome-MXhj-AOE1z-R.png',
      tags: ['github', 'actions'],
    },
  ],
};
