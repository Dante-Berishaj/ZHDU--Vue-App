<template>
  <v-container>
    <h1>About us</h1>
    <v-spacer></v-spacer>
    <v-divider></v-divider>
    <div>
     <v-container>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est voluptate
        ullam dolorem quisquam facilis culpa deleniti ipsa fugit architecto
        expedita? Animi ad in rem non! Ut necessitatibus laboriosam possimus
        culpa! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est voluptate
        ullam dolorem quisquam facilis culpa deleniti ipsa fugit architecto
        expedita? Animi ad in rem non! Ut necessitatibus laboriosam possimus
        culpa! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est voluptate
        ullam dolorem quisquam facilis culpa deleniti ipsa fugit architecto
        expedita? Animi ad in rem non! Ut necessitatibus laboriosam possimus
        culpa!
      </p>
     </v-container>
      <v-spacer></v-spacer>
    <v-divider></v-divider>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <h2>Members</h2>
            <v-list>
              <v-list-item
                v-for="member in members"
                :key="member.name"
                three-line
              >
                <v-list-item-icon>
                  <v-icon v-if="member.icon" color="pink"> mdi-star </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-name v-text="member.name"></v-list-item-name>
                  <v-list-item-subtitle>
                    {{ member.bio }}
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar>
                  <v-img :src="member.avatar"></v-img>
                </v-list-item-avatar>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col cols="12" md="4">
            <h2>Services</h2>
            <v-list>
              <v-list-item v-for="service in services" :key="service.id">
                <v-list-item-content>
                  <v-list-item-title>                 
                  {{ service.title }}
                    </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ service.description }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-icon default>
                   <v-btn :href="service.href" text>
                  <v-icon
                  >{{ service.icon }}</v-icon>
                  </v-btn>
                </v-list-item-icon>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-divider></v-divider>
      <v-container>
         <div class="googlemap">
      <iframe src="https://maps.google.com/maps?q=prishtine%20kosovo&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="450"></iframe>
    </div>
      </v-container>
      </v-container>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      members: [
        { icon: true,
          name: "Dante Berishaj",
          avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',      
          bio: "Officia nisi consectetur qui magna aliqua. Magna quis laborum magna eiusmod tempor labore labore occaecat laborum nisi. Id fugiat aute ex laboris aliqua exercitation ex id. Consectetur nulla labore ex veniam ipsum Lorem. Elit nisi duis occaecat exercitation esse tempor nostrud duis aute. Tempor ea minim ad nisi reprehenderit eu minim dolore sint. Nulla officia pariatur Lorem magna Lorem mollit esse officia.",
        },
        {
          name: "Qendresa Berisha",
          avatar:'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
          bio: "Officia nisi consectetur qui magna aliqua. Magna quis laborum magna eiusmod tempor labore labore occaecat laborum nisi. Id fugiat aute ex laboris aliqua exercitation ex id. Consectetur nulla labore ex veniam ipsum Lorem. Elit nisi duis occaecat exercitation esse tempor nostrud duis aute. Tempor ea minim ad nisi reprehenderit eu minim dolore sint. Nulla officia pariatur Lorem magna Lorem mollit esse officia.",
        },
        {
          name: "Bleart Nuredini",
          avatar:'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
          bio: "Officia nisi consectetur qui magna aliqua. Magna quis laborum magna eiusmod tempor labore labore occaecat laborum nisi. Id fugiat aute ex laboris aliqua exercitation ex id. Consectetur nulla labore ex veniam ipsum Lorem. Elit nisi duis occaecat exercitation esse tempor nostrud duis aute. Tempor ea minim ad nisi reprehenderit eu minim dolore sint. Nulla officia pariatur Lorem magna Lorem mollit esse officia.",
        },
      ],
      services: [
        {
          id: 1,
          title: "Find cities",
          description:
            "Lorem est minim nisi proident exercitation amet. Laboris nostrud esse minim culpa mollit. Ipsum irure ea deserunt dolor. Nulla exercitation excepteur esse in voluptate esse deserunt occaecat laborum reprehenderit in sint sunt ut. Irure est do consequat elit consequat nostrud veniam veniam sit laboris aliquip anim.",
          icon: "mdi-domain",
          href: "/cities",

        },
        {
          id: 2,
          title: "Discover Kosova",
          description:
            "Elit laborum qui sit ad pariatur laboris duis laboris proident. Nisi occaecat et commodo officia. Magna veniam in labore pariatur. Aliqua sunt irure excepteur velit. Mollit do labore esse sit officia velit dolor.",
          icon: "mdi-call-split",
          href: "/",
        },
        {
          id: 3,
          title: "Find accommodation",
          description:
            "Commodo enim ad ut nulla. Ex fugiat elit anim deserunt do amet duis. Officia deserunt quis sunt aute minim enim eiusmod dolore. Et eu cupidatat nulla quis mollit dolore duis dolore. Deserunt nisi sint laboris sint adipisicing elit sunt anim tempor cillum est reprehenderit proident pariatur. Nostrud amet ea esse qui adipisicing velit ex.",
          icon: "mdi-home-city-outline",
          href: "/hotels",

        },
      ],
    };
  },
};
</script>

<style>
.text-left {
  text-align: left;
}
</style>
