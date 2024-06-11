import PropTypes from 'prop-types';

export const NavItem = PropTypes.shape({
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
});

export const TaskView = {
  CALENDAR: "CALENDAR",
  QUARDRANT: "QUARDRANT",
  INBOX: "INBOX",
}
