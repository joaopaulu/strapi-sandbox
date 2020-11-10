const GET_LANDING_PAGE = /* GraphQL*/ `
fragment logo on LandingPage {
  logo {
    alternativeText
    url
  }
}

fragment header on LandingPage {
  header {
    title
    description
    button {
      label
      url
    }
    image {
      alternativeText
      url
    }
  }
}

fragment sectionAbout on LandingPage {
  sectionAboutProject {
    title
    description
    image {
      alternativeText
      url
    }
  }
}

fragment sectionTech on LandingPage {
  sectionTech {
    title
    techIcons {
      title
      icon {
        url
      }
    }
  }
}

fragment sectionConceps on LandingPage {
  sectionConcepts {
    title
    concepts {
      id
      title
    }
  }
}

fragment sectionModules on LandingPage {
  sectionModules {
    title
    modules{
      title
      subtitle
      description
    }
  }
}

query GET_LANDING_PAGE {
  landingPage {
    ...logo
    ...header
    ...sectionAbout
    ...sectionTech
    ...sectionConceps
    ...sectionModules
  }
}
`
export default GET_LANDING_PAGE
