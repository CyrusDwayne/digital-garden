import React from 'react'
import { graphql } from 'gatsby'
// import { css } from '@emotion/core'
import Layout from 'components/Layout'
// import { lighten, darken } from 'polished'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
// import { useTheme } from 'components/Theming'
import Container from 'components/Container'
// import { rhythm } from '../lib/typography'
// import { fonts } from '../lib/typography'
// import { bpMaxMD, bpMaxSM } from '../lib/breakpoints'
import SimpleCard from '../components/SimpleCard'
import { Book } from '../components/Book'
import IllustrationCard from '../components/IllustrationCard'

const Hero = () => {
  // const theme = useTheme()
  return (
    <section>
      <Container>
        <h1

        >
          Hey. Hi. Hello.
        </h1>
        <h2

        >
          My place on the interwebs where I share and create openly as an example for others. All while I document my journey of a neurodivergent identity, healing abuse, and achieving self-actualization as an intellectual creative.
          {/* create things to help others build, grow, and heal.  */}
          {/* maybe put your "Exercise leadership by sharing knowledge that builds community through visual storytelling." */}
        </h2>
        <h4

        >
          {/* Oh, I am a brand strategist and designer for hire at    */}
          Interested in working together? Meet me{' '}<a
            href="https://egghead.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            in my office 
          
          </a>.

        </h4>
      </Container>
    </section>
  )
}

const SmallSectionLink = props => {
  return (
    <Link
      to={props.to}
      aria-label={props.aria}
    >
      {props.children}
    </Link>
  )
}

const TitleSectionLink = props => {
  return (
    <Link

      to={props.to}
      aria-label={props.aria}
    >
      <h3>{props.children}---</h3>
    </Link>
  )
}




// ------- // Main Section // ---------- //

export default function Index({
  data: { site, bookQuery, illustrationQuery, essaysQuery, notesQuery },
}) {
  return (
    <Layout site={site}>
      <Hero />
      <Container>
        <section>
          {/* ------------ Garden Section ------------ */}
          <section className="garden">
            {/* <button>Start Here</button> */}
            <TitleSectionLink to="/garden">The Digital Garden</TitleSectionLink>
            <p>
              A consistently tended collection of half-baked notes, research,
              and sketches.
            </p>

            {/* ---- Notes Section */}

            <div className="gardenGrid">
              {notesQuery.edges.map(({ node: note }) => (
                <Link
    
                  to={note.childMarkdownRemark.frontmatter.slug}
                  aria-label={`View ${note.title}`}
                >
                  <SimpleCard
                  >
                    <h4>{note.title}</h4>
                    <div className="metadata">
                      <h6 className="updated">
                        {note.childMarkdownRemark.frontmatter.updated}
                      </h6>
                      <span>
                        {note.childMarkdownRemark.frontmatter.growthStage ===
                        'Seedling' ? (
                          <h6 className="growthStage">
                            {' '}
                            seedling
                            <span role="img" aria-label="seedling">
                              🌱{' '}
                            </span>
                          </h6>
                        ) : null}
                        {note.childMarkdownRemark.frontmatter.growthStage ===
                        'Budding' ? (
                          <h6 className="growthStage">
                            {' '}
                            budding
                            <span role="img" aria-label="seedling">
                              🌿
                            </span>{' '}
                          </h6>
                        ) : null}
                        {note.childMarkdownRemark.frontmatter.growthStage ===
                        'Evergreen' ? (
                          <h6 className="growthStage">
                            {' '}
                            evergreen
                            <span role="img" aria-label="seedling">
                              🌳
                            </span>{' '}
                          </h6>
                        ) : null}
                      </span>
                    </div>
                  </SimpleCard>
                </Link>
              ))}
            </div>

            <SmallSectionLink
              float="right"
              to="/garden"
              aria="Visit the Garden"
            >
              Visit the Garden
            </SmallSectionLink>
          </section>
        </section>

        {/* ------------------ Essays Section-----------------  */}
        <section className="essays">
          <TitleSectionLink to="/essays">Illustrated Essays</TitleSectionLink>
          <div className="essaysGrid">
            {essaysQuery.edges.map(({ node: essay }) => (
              <Link
                to={`/${essay.frontmatter.slug}`}
                aria-label={`View ${essay.frontmatter.title}`}
              >
                <SimpleCard
                  margintop="0em"
                  marginbottom="0em"
                  hover
                  key={essay.id}
                >
                  <Img fluid={essay.frontmatter.cover.childImageSharp.fluid} />
                  <h4>{essay.frontmatter.title}</h4>
                  <h6>{essay.frontmatter.description}</h6>
                </SimpleCard>
              </Link>
            ))}
          </div>

          <SmallSectionLink float="right" to="/essays" aria="Read More Essays">
            Read More Essays
          </SmallSectionLink>
        </section>

        {/* ------------ Illustration Section ------------ */}
        <section className="illustration">
          <TitleSectionLink to="/illustration">
            Illustration Projects
          </TitleSectionLink>
          <div className="illustrationGrid">
            {illustrationQuery.edges.map(({ node: illustration }) => (
              <IllustrationCard
                slug={illustration.frontmatter.slug}
                title={illustration.frontmatter.title}
                id={illustration.id}
                fluid={illustration.frontmatter.cover.childImageSharp.fluid}
              />
            ))}
          </div>
          <SmallSectionLink
            float="right"
            to="/illustration"
            aria="See More Illustrations"
          >
            See More Illustrations
          </SmallSectionLink>
        </section>

        {/* ------------ Books Section ------------ */}
        <section className="books">
          <span className="bookTitle">
            <TitleSectionLink to="/library">Library Notes</TitleSectionLink>
            <p
            >
              A past and present reading collection. Complete with very loose
              and opinionated notes.
            </p>

            <SmallSectionLink
              float="left"
              to="/library"
              aria="Browse the Library"
            >
              Browse the Library
            </SmallSectionLink>
          </span>
          {bookQuery.edges.map(({ node: book }) => (
            <Book
              redirectTo={book.frontmatter.redirectTo}
              slug={book.frontmatter.slug}
              title={book.frontmatter.title}
              key={book.id}
              fluidImg={book.frontmatter.cover.childImageSharp.fluid}
              author={book.frontmatter.author}
            />
          ))}
        </section>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }

    illustrationQuery: allMdx(
      filter: {
        frontmatter: { type: { eq: "illustration" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___updated }
      limit: 3
    ) {
      edges {
        node {
          excerpt(pruneLength: 120)
          id
          fields {
            title
            slug
            updated
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            updated(formatString: "MMMM DD, YYYY")
            description
            slug
            cover {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    notesQuery: allBrainNote(
      sort: { order: DESC, fields: childMarkdownRemark___frontmatter___updated }
      limit: 6
    ) {
      edges {
        node {
          id
          title
          childMarkdownRemark {
            frontmatter {
              slug
              growthStage
              updated(formatString: "MMM DD, YYYY")
            }
          }
        }
      }
    }

    essaysQuery: allMdx(
      filter: {
        frontmatter: { type: { eq: "essay" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___updated }
      limit: 4
    ) {
      edges {
        node {
          excerpt(pruneLength: 120)
          id
          fields {
            title
            slug
            updated
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            updated(formatString: "MMMM DD, YYYY")
            description
            slug
            cover {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    bookQuery: allMdx(
      filter: {
        frontmatter: { type: { eq: "book" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___updated }
      limit: 3
    ) {
      edges {
        node {
          excerpt(pruneLength: 120)
          id
          fields {
            title
            slug
            updated
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            updated(formatString: "MMMM DD, YYYY")
            description
            slug
            redirectTo
            cover {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
