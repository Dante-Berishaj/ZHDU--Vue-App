<template>
  <v-container>
    <h1>About us</h1>
    <div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est voluptate
        ullam dolorem quisquam facilis culpa deleniti ipsa fugit architecto
        expedita? Animi ad in rem non! Ut necessitatibus laboriosam possimus
        culpa!
      </p>
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
                  <v-list-item-title>{{ service.title }}</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ service.description }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action> </v-list-item-action>
                <v-list-item-icon default>
                  <v-icon>{{ service.icon }}</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
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
        {
          icon: true,
          name: "McManus",
          avatar:
            "data:image/jpeg;base64,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",
          bio: "Officia nisi consectetur qui magna aliqua. Magna quis laborum magna eiusmod tempor labore labore occaecat laborum nisi. Id fugiat aute ex laboris aliqua exercitation ex id. Consectetur nulla labore ex veniam ipsum Lorem. Elit nisi duis occaecat exercitation esse tempor nostrud duis aute. Tempor ea minim ad nisi reprehenderit eu minim dolore sint. Nulla officia pariatur Lorem magna Lorem mollit esse officia.",
        },
        {
          name: "Keaton",
          avatar:
            "https://resizing.flixster.com/BsPlWhe4pI-t8FYKKxMUcQb-Lxg=/300x300/v1.bjsxNTE2Mzc7ajsxOTAzNjsxMjAwOzQwMTY7MjcwMA",
          bio: "Officia nisi consectetur qui magna aliqua. Magna quis laborum magna eiusmod tempor labore labore occaecat laborum nisi. Id fugiat aute ex laboris aliqua exercitation ex id. Consectetur nulla labore ex veniam ipsum Lorem. Elit nisi duis occaecat exercitation esse tempor nostrud duis aute. Tempor ea minim ad nisi reprehenderit eu minim dolore sint. Nulla officia pariatur Lorem magna Lorem mollit esse officia.",
        },
        {
          name: "Fenster",
          avatar:
            "https://i.pinimg.com/originals/28/59/a7/2859a7e5ef01b8431145ed94185fc911.jpg",
          bio: "Officia nisi consectetur qui magna aliqua. Magna quis laborum magna eiusmod tempor labore labore occaecat laborum nisi. Id fugiat aute ex laboris aliqua exercitation ex id. Consectetur nulla labore ex veniam ipsum Lorem. Elit nisi duis occaecat exercitation esse tempor nostrud duis aute. Tempor ea minim ad nisi reprehenderit eu minim dolore sint. Nulla officia pariatur Lorem magna Lorem mollit esse officia.",
        },
        {
          name: "Keyser",
          avatar:
            "https://upload.wikimedia.org/wikipedia/en/5/5c/Keyser_S%C3%B6ze_-_photo.jpg",
          bio: "Officia nisi consectetur qui magna aliqua. Magna quis laborum magna eiusmod tempor labore labore occaecat laborum nisi. Id fugiat aute ex laboris aliqua exercitation ex id. Consectetur nulla labore ex veniam ipsum Lorem. Elit nisi duis occaecat exercitation esse tempor nostrud duis aute. Tempor ea minim ad nisi reprehenderit eu minim dolore sint. Nulla officia pariatur Lorem magna Lorem mollit esse officia.",
        },
        {
          name: "Hockey",
          avatar:
            "https://ficquotes.com/images/characters/hockney-the-usual-suspects.jpg",
          bio: "Officia nisi consectetur qui magna aliqua. Magna quis laborum magna eiusmod tempor labore labore occaecat laborum nisi. Id fugiat aute ex laboris aliqua exercitation ex id. Consectetur nulla labore ex veniam ipsum Lorem. Elit nisi duis occaecat exercitation esse tempor nostrud duis aute. Tempor ea minim ad nisi reprehenderit eu minim dolore sint. Nulla officia pariatur Lorem magna Lorem mollit esse officia.",
        },
      ],
      services: [
        {
          id: 1,
          title: "Find cities",
          description:
            "Lorem est minim nisi proident exercitation amet. Laboris nostrud esse minim culpa mollit. Ipsum irure ea deserunt dolor. Nulla exercitation excepteur esse in voluptate esse deserunt occaecat laborum reprehenderit in sint sunt ut. Irure est do consequat elit consequat nostrud veniam veniam sit laboris aliquip anim.",
          icon: "mdi-call-split",
        },
        {
          id: 2,
          title: "Discover Kosova",
          description:
            "Elit laborum qui sit ad pariatur laboris duis laboris proident. Nisi occaecat et commodo officia. Magna veniam in labore pariatur. Aliqua sunt irure excepteur velit. Mollit do labore esse sit officia velit dolor.",
          icon: "mdi-domain",
        },
        {
          id: 3,
          title: "Share your experience",
          description:
            "Commodo enim ad ut nulla. Ex fugiat elit anim deserunt do amet duis. Officia deserunt quis sunt aute minim enim eiusmod dolore. Et eu cupidatat nulla quis mollit dolore duis dolore. Deserunt nisi sint laboris sint adipisicing elit sunt anim tempor cillum est reprehenderit proident pariatur. Nostrud amet ea esse qui adipisicing velit ex.",
          icon: "mdi-email",
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
