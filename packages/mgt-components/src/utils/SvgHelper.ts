/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * Defines icon used by svgHelper
 *
 * @export
 * @enum {number}
 */
export enum SvgIcon {
  /**
   * Arrow Icon pointing right
   */
  ArrowRight,

  /**
   * Arrow Icon pointing down
   */
  ArrowDown,

  /**
   * Icon separates team from channel in selection
   */
  TeamSeparator,

  /**
   * Search icon
   */
  Search,

  /**
   * Skype Arrow icon (out of office status)
   */
  SkypeArrow,

  /**
   * Smaller email icon used in top of person card
   */
  SmallEmail,

  /**
   * Smaller email, hovered version, icon used in top of person card
   */
  SmallEmailHovered,

  /**
   * Smaller chat icon used in top of person card
   */
  SmallChat,

  /**
   * Small chat icon, hover version, used in top of person card
   */
  SmallChatHovered,

  /**
   * Video icon used in top of person card
   */
  Video,

  /**
   * Videoicon, hovered version used in top of person card
   */
  VideoHovered,

  /**
   * Downward chevron
   */
  ExpandDown,

  /**
   * Overview icon
   */
  Overview,

  /**
   * Paper plane
   */
  Send,

  /**
   * Phone/Mail icon
   */
  Contact,

  /**
   * Copy to clipboard
   */
  Copy,

  /**
   * A phone handset
   */
  Phone,

  /**
   * A cellphone
   */
  CellPhone,

  /**
   * Chat message
   */
  Chat,

  /**
   * Call icon
   */
  Call,

  /**
   * Call icon, hovered version
   */
  CallHovered,

  /**
   * Company department
   */
  Department,

  /**
   * Email message
   */
  Email,

  /**
   * Location indicator
   */
  OfficeLocation,

  /**
   * A person
   */
  Person,

  /**
   * Messages
   */
  Messages,

  /**
   * Organization tree
   */
  Organization,

  /**
   * Right facing chevron
   */
  ExpandRight,

  /**
   * Person profile
   */
  Profile,

  /**
   * Balloon
   */
  Birthday,

  /**
   * File icon
   */
  File,

  /**
   * Files icon
   */
  Files,

  /**
   * Back arrow
   */
  Back,

  /**
   * Close icon
   */
  Close,

  /**
   * Upload icon
   */
  Upload,

  /**
   * File Cloud icon
   */
  FileCloud,

  /**
   * Drag File Mouse Icon
   */
  DragFile,

  /**
   *
   * Cancel icon
   */
  Cancel,

  /**
   *
   * Success icon
   */
  Success,

  /**
   *
   * Fail icon
   */
  Fail,
  /**
   *
   * account selection
   */
  SelectAccount
}

import { html } from 'lit';

/**
 * returns an svg
 * @param svgIcon defined by name
 * @param color hex value
 */
export function getSvg(svgIcon: SvgIcon, color?: string) {
  switch (svgIcon) {
    case SvgIcon.ArrowRight:
      return html`
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 7L4.46481 10.5359L4.46481 7L4.46481 3.46413L8 7Z" />
        </svg>
      `;

    case SvgIcon.ArrowDown:
      return html`
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L2.46447 5.46447H6H9.53553L6 9Z" />
        </svg>
      `;

    case SvgIcon.TeamSeparator:
      return html`
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.70711 5L1.49999 9.20711L0.792886 8.50001L4.29289 5L0.792887 1.49999L1.49999 0.792885L5.70711 5Z"
            fill=${color}
          />
        </svg>
      `;

    case SvgIcon.Search:
      return html`
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.30887 8.01596C6.53903 8.63179 5.56252 9.00004 4.5 9.00004C2.01472 9.00004 0 6.98531 0 4.50002C0 2.01473 2.01472 0 4.5 0C6.98528 0 9 2.01473 9 4.50002C9 5.56252 8.63177 6.53901 8.01597 7.30885L11.8536 11.1464C12.0488 11.3417 12.0488 11.6583 11.8536 11.8536C11.6583 12.0488 11.3417 12.0488 11.1464 11.8536L7.30887 8.01596ZM8 4.50002C8 2.56701 6.433 1 4.5 1C2.567 1 1 2.56701 1 4.50002C1 6.43302 2.567 8.00003 4.5 8.00003C6.433 8.00003 8 6.43302 8 4.50002Z" fill="#212121"/>
        </svg>`;

    case SvgIcon.SkypeArrow:
      return html`
        <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.95184 0.480534C4.23385 0.10452 4.70926 -0.0724722 5.1685 0.0275755C5.62775 0.127623 5.98645 0.486329 6.0865 0.945575C6.18655 1.40482 6.00956 1.88023 5.63354 2.16224L4.07196 3.72623H10.7988C11.4622 3.72623 12 4.26403 12 4.92744C12 5.59086 11.4622 6.12866 10.7988 6.12866H4.07196L5.63114 7.68784C6.0955 8.15225 6.0955 8.90515 5.63114 9.36955C5.51655 9.48381 5.38119 9.57514 5.23234 9.63862C5.09341 9.69857 4.94399 9.73042 4.79269 9.73232C4.63498 9.73233 4.4789 9.70046 4.33382 9.63862C4.18765 9.57669 4.05593 9.48507 3.94703 9.36955L0.343377 5.7659C-0.114459 5.29881 -0.114459 4.55128 0.343377 4.08419L3.95184 0.480534Z"
            fill="#B4009E"
          />
        </svg>
      `;

    case SvgIcon.SmallEmail:
      return html`
        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.608 0.833496C14.9887 0.833496 16.108 1.95278 16.108 3.3335V11.3335C16.108 12.7142 14.9887 13.8335 13.608 13.8335H2.60803C1.22732 13.8335 0.108032 12.7142 0.108032 11.3335V3.3335C0.108032 1.95278 1.22732 0.833496 2.60803 0.833496H13.608ZM15.108 4.7945L8.36154 8.76446C8.23115 8.84117 8.07464 8.85395 7.93554 8.80281L7.85452 8.76446L1.10803 4.7965V11.3335C1.10803 12.1619 1.77961 12.8335 2.60803 12.8335H13.608C14.4365 12.8335 15.108 12.1619 15.108 11.3335V4.7945ZM13.608 1.8335H2.60803C1.77961 1.8335 1.10803 2.50507 1.10803 3.3335V3.6355L8.10803 7.75341L15.108 3.6345V3.3335C15.108 2.50507 14.4365 1.8335 13.608 1.8335Z" fill="#023B8F"/>
        </svg>
      `;

    case SvgIcon.SmallEmailHovered:
      return html`
      <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3.373V10.5C16 11.8807 14.8807 13 13.5 13H2.5C1.11929 13 -7.62939e-05 11.8807 -7.62939e-05 10.5V3.373L7.74649 7.93097C7.90297 8.02301 8.09704 8.02301 8.25351 7.93097L16 3.373ZM13.5 0C14.7871 0 15.847 0.972604 15.9848 2.22293L8 6.91991L0.0151832 2.22293C0.15304 0.972604 1.21294 0 2.5 0H13.5Z" fill="#023B8F"/>
      </svg>
      `;

    case SvgIcon.SmallChat:
      return html`
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.38599 0.833496C12.8043 0.833496 16.386 4.41522 16.386 8.8335C16.386 13.2518 12.8043 16.8335 8.38599 16.8335C7.11277 16.8335 5.8819 16.5353 4.77267 15.9728L4.65199 15.9085L1.00708 16.8186C0.697255 16.8959 0.41221 16.6704 0.387296 16.3773L0.387128 16.2959L0.400919 16.2122L1.31099 12.5685L1.24768 12.4488C0.792589 11.5521 0.510317 10.5757 0.418733 9.56176L0.393362 9.17984L0.385986 8.8335C0.385986 4.41522 3.96771 0.833496 8.38599 0.833496ZM8.38599 1.8335C4.51999 1.8335 1.38599 4.9675 1.38599 8.8335C1.38599 10.0505 1.69653 11.2213 2.27951 12.2584C2.32645 12.3419 2.34809 12.4365 2.34291 12.5308L2.32873 12.6247L1.57299 15.6455L4.59703 14.8918C4.65892 14.8764 4.72261 14.8731 4.78472 14.8814L4.87629 14.9026L4.963 14.941C5.9996 15.5233 7.16969 15.8335 8.38599 15.8335C12.252 15.8335 15.386 12.6995 15.386 8.8335C15.386 4.9675 12.252 1.8335 8.38599 1.8335ZM8.88599 9.8335C9.16213 9.8335 9.38599 10.0574 9.38599 10.3335C9.38599 10.579 9.20911 10.7831 8.97586 10.8254L8.88599 10.8335H5.88599C5.60984 10.8335 5.38599 10.6096 5.38599 10.3335C5.38599 10.088 5.56286 9.88389 5.79611 9.84155L5.88599 9.8335H8.88599ZM10.886 6.8335C11.1621 6.8335 11.386 7.05735 11.386 7.3335C11.386 7.57896 11.2091 7.7831 10.9759 7.82544L10.886 7.8335L5.88599 7.8335C5.60984 7.8335 5.38599 7.60964 5.38599 7.3335C5.38599 7.08804 5.56286 6.88389 5.79611 6.84155L5.88599 6.8335L10.886 6.8335Z" fill="#023B8F"/>
        </svg>
      `;

    case SvgIcon.SmallChatHovered:
      return html`
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C6.72679 16 5.49591 15.7018 4.38669 15.1393L4.266 15.075L0.621091 15.9851C0.311269 16.0625 0.0262241 15.8369 0.00130987 15.5438L0.00114131 15.4624L0.0149329 15.3787L0.925 11.735L0.86169 11.6153C0.406602 10.7186 0.124331 9.74223 0.0327466 8.72826L0.00737596 8.34634L0 8C0 3.58172 3.58172 0 8 0ZM8.5 9H5.5L5.41012 9.00806C5.17688 9.05039 5 9.25454 5 9.5C5 9.74546 5.17688 9.94961 5.41012 9.99194L5.5 10H8.5L8.58988 9.99194C8.82312 9.94961 9 9.74546 9 9.5C9 9.25454 8.82312 9.05039 8.58988 9.00806L8.5 9ZM10.5 6H5.5L5.41012 6.00806C5.17688 6.05039 5 6.25454 5 6.5C5 6.74546 5.17688 6.94961 5.41012 6.99194L5.5 7H10.5L10.5899 6.99194C10.8231 6.94961 11 6.74546 11 6.5C11 6.25454 10.8231 6.05039 10.5899 6.00806L10.5 6Z" fill="#023B8F"/>
      </svg>
      `;

    case SvgIcon.Video:
      return html`
        <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.72095 0.833496C1.34024 0.833496 0.220947 1.95278 0.220947 3.3335V10.3335C0.220947 11.7142 1.34024 12.8335 2.72095 12.8335H9.72095C11.1017 12.8335 12.2209 11.7142 12.2209 10.3335V9.33348L14.6209 11.1335C15.2802 11.6279 16.2209 11.1575 16.2209 10.3335V3.33348C16.2209 2.50944 15.2802 2.03905 14.6209 2.53348L12.2209 4.33348V3.3335C12.2209 1.95278 11.1017 0.833496 9.72095 0.833496H2.72095ZM12.2209 5.58348L15.2209 3.33348V10.3335L12.2209 8.08348V5.58348ZM11.2209 3.3335V10.3335C11.2209 11.1619 10.5494 11.8335 9.72095 11.8335H2.72095C1.89252 11.8335 1.22095 11.1619 1.22095 10.3335V3.3335C1.22095 2.50507 1.89252 1.8335 2.72095 1.8335H9.72095C10.5494 1.8335 11.2209 2.50507 11.2209 3.3335Z" fill="#023B8F"/>
        </svg>
      `;

    case SvgIcon.VideoHovered:
      return html`
      <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 2.5C11 1.11929 9.88071 0 8.5 0H2.5C1.11929 0 0 1.11929 0 2.5V9.5C0 10.8807 1.11929 12 2.5 12H8.5C9.88071 12 11 10.8807 11 9.5V2.5ZM12 3.93082V8.08149L14.7642 10.4319C15.2512 10.8461 16 10.4999 16 9.86055V2.19315C16 1.55685 15.2575 1.20962 14.7692 1.61756L12 3.93082Z" fill="#023B8F"/>
      </svg>
      `;

    case SvgIcon.ExpandDown: {
      return html`
        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 1L7.5 7L1 1" stroke="#3078CD" />
        </svg>
      `;
    }

    case SvgIcon.Overview:
      return html`
        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.5 10.5C2.67157 10.5 2 9.82843 2 9V4C2 3.17157 2.67157 2.5 3.5 2.5H12.5C13.3284 2.5 14 3.17157 14 4V9C14 9.82843 13.3284 10.5 12.5 10.5H3.5ZM3.5 3.5C3.22386 3.5 3 3.72386 3 4V5.5H13V4C13 3.72386 12.7761 3.5 12.5 3.5H3.5ZM5 6.5H3V9C3 9.27614 3.22386 9.5 3.5 9.5H5V6.5ZM6 9.5H12.5C12.7761 9.5 13 9.27614 13 9V6.5H6V9.5ZM0 3C0 1.61929 1.11929 0.5 2.5 0.5H13.5C14.8807 0.5 16 1.61929 16 3V10C16 11.3807 14.8807 12.5 13.5 12.5H2.5C1.11929 12.5 0 11.3807 0 10V3ZM2.5 1.5C1.67157 1.5 1 2.17157 1 3V10C1 10.8284 1.67157 11.5 2.5 11.5H13.5C14.3284 11.5 15 10.8284 15 10V3C15 2.17157 14.3284 1.5 13.5 1.5H2.5Z" fill="#717171"/>
        </svg>
      `;

    case SvgIcon.Send:
      return html`
        <svg xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.27144 8.99999L1.72572 2.45387C1.54854 1.99826 1.9928 1.56256 2.43227 1.71743L2.50153 1.74688L16.0015 8.49688C16.3902 8.69122 16.4145 9.22336 16.0744 9.45992L16.0015 9.50311L2.50153 16.2531C2.0643 16.4717 1.58932 16.0697 1.70282 15.6178L1.72572 15.5461L4.27144 8.99999L1.72572 2.45387L4.27144 8.99999ZM3.3028 3.4053L5.25954 8.43705L10.2302 8.43749C10.515 8.43749 10.7503 8.64911 10.7876 8.92367L10.7927 8.99999C10.7927 9.28476 10.5811 9.52011 10.3065 9.55736L10.2302 9.56249L5.25954 9.56205L3.3028 14.5947L14.4922 8.99999L3.3028 3.4053Z"
          />
        </svg>
      `;

    case SvgIcon.Contact:
      return html`
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5ZM2 7.69879C2 7.17479 2.42479 6.75 2.94879 6.75H6.05121C6.57521 6.75 7 7.17479 7 7.69879C7 8.54603 6.42338 9.28454 5.60144 9.49003L5.54243 9.50478C4.85801 9.67589 4.14199 9.67589 3.45757 9.50478L3.39856 9.49003C2.57661 9.28454 2 8.54603 2 7.69879ZM9.5 4C9.22386 4 9 4.22386 9 4.5C9 4.77614 9.22386 5 9.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H9.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8H12.5C12.7761 8 13 7.77614 13 7.5C13 7.22386 12.7761 7 12.5 7H9.5ZM0 1.75C0 0.783502 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V10.25C16 11.2165 15.2165 12 14.25 12H1.75C0.783501 12 0 11.2165 0 10.25V1.75ZM1.75 1C1.33579 1 1 1.33579 1 1.75V10.25C1 10.6642 1.33579 11 1.75 11H14.25C14.6642 11 15 10.6642 15 10.25V1.75C15 1.33579 14.6642 1 14.25 1H1.75Z" fill="#717171"/>
        </svg>
      `;

    case SvgIcon.Call:
      return html`
        <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.9292 0.399388L3.2125 0.615419C1.90898 1.00834 0.951582 2.1215 0.758116 3.46915C0.461142 5.53787 1.12537 7.95591 2.72582 10.728C4.32291 13.4942 6.0808 15.2768 8.01603 16.0565C9.28562 16.5681 10.7369 16.2927 11.7308 15.3515L12.2736 14.8374C13.0011 14.1485 13.1065 13.0275 12.5202 12.215L11.1636 10.3349C10.788 9.81423 10.1226 9.59039 9.50865 9.7781L7.45794 10.4051L7.40494 10.4154C7.17877 10.4485 6.65754 9.95942 6.00741 8.83335C5.32726 7.65531 5.1863 6.96648 5.37408 6.7889L6.41743 5.81598C7.19937 5.08681 7.43039 3.94078 6.99201 2.96562L6.33055 1.49424C5.91866 0.578005 4.89102 0.109471 3.9292 0.399388ZM5.41847 1.90427L6.07993 3.37564C6.34277 3.96031 6.20426 4.64744 5.73543 5.08463L4.68953 6.05994C4.02044 6.69268 4.24206 7.77567 5.14138 9.33335C5.98759 10.799 6.75958 11.5233 7.58908 11.3977L7.71341 11.3711L9.80102 10.7344C10.0057 10.6718 10.2275 10.7464 10.3527 10.92L11.7093 12.8001C12.0024 13.2064 11.9497 13.7669 11.586 14.1113L11.0432 14.6254C10.3333 15.2977 9.29663 15.4944 8.38977 15.129C6.6917 14.4448 5.08689 12.8175 3.59185 10.228C2.09375 7.63319 1.48745 5.42604 1.74797 3.61125C1.88616 2.64864 2.57001 1.85352 3.5011 1.57287L4.2178 1.35684C4.69871 1.21188 5.21253 1.44615 5.41847 1.90427Z" fill="#023B8F"/>
        </svg>
      `;

    case SvgIcon.CallHovered:
      return html`
      <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.98706 1.06589C4.89545 0.792081 5.86254 1.19479 6.31418 2.01224L6.38841 2.16075L7.04987 3.63213C7.46246 4.54992 7.28209 5.61908 6.60754 6.3496L6.47529 6.48248L5.43194 7.45541C5.24417 7.63298 5.38512 8.32181 6.06527 9.49986C6.67716 10.5597 7.17487 11.0552 7.41986 11.0823L7.4628 11.082L7.5158 11.0716L9.56651 10.4446C10.1332 10.2713 10.7438 10.4487 11.1298 10.8865L11.2215 11.0014L12.5781 12.8815C13.1299 13.6462 13.0689 14.6842 12.4533 15.378L12.3314 15.5039L11.7886 16.018C10.7948 16.9592 9.34348 17.2346 8.07389 16.7231C6.13867 15.9433 4.38077 14.1607 2.78368 11.3945C1.18323 8.62242 0.519004 6.20438 0.815977 4.13565C0.99977 2.85539 1.87301 1.78674 3.07748 1.3462L3.27036 1.28192L3.98706 1.06589Z" fill="#023B8F"/>
      </svg>
      `;

    case SvgIcon.Copy:
      return html`
        <svg width="13" height="14" viewBox="0 0 13 14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.625 5.50293V14H3.875V11.375H0.375V0H6.24707L8.87207 2.625H9.74707L12.625 5.50293ZM10 5.25H11.1279L10 4.12207V5.25ZM3.875 2.625H7.62793L5.87793 0.875H1.25V10.5H3.875V2.625ZM11.75 6.125H9.125V3.5H4.75V13.125H11.75V6.125Z"
          />
        </svg>
      `;

    case SvgIcon.Phone:
      return html`
        <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" fill="none">
            <path d="M1607 1213q44 0 84 16t72 48l220 220q31 31 47 71t17 85q0 44-16 84t-48 72l-14 14q-54 54-99 96t-94 70-109 44-143 15q-125 0-257-39t-262-108-256-164-237-207-206-238-162-256T38 775 0 523q0-83 14-142t43-108 70-93 96-99l16-16q31-31 71-48t85-17q44 0 84 17t72 48l220 220q31 31 47 71t17 85q0 44-15 78t-37 63-48 51-49 45-37 44-15 49q0 38 27 65l551 551q27 27 65 27 26 0 48-15t45-37 45-48 51-49 62-37 79-15zm-83 707q72 0 120-13t88-39 76-64 85-86q27-27 27-65 0-18-14-42t-38-52-51-55-56-54-51-47-37-35q-27-27-66-27-26 0-48 15t-44 37-45 48-52 49-62 37-79 15q-44 0-84-16t-72-48L570 927q-31-31-47-71t-17-85q0-44 15-78t37-63 48-51 49-46 37-44 15-48q0-39-27-66-13-13-34-36t-47-51-54-56-56-52-51-37-43-15q-38 0-65 27l-85 85q-37 37-64 76t-40 87-14 120q0 112 36 231t101 238 153 234 192 219 219 190 234 150 236 99 226 36z" fill="${color}"></path>
        </svg>
      `;

    case SvgIcon.CellPhone:
      return html`
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12C3.72386 12 3.5 12.2239 3.5 12.5C3.5 12.7761 3.72386 13 4 13H6C6.27614 13 6.5 12.7761 6.5 12.5C6.5 12.2239 6.27614 12 6 12H4ZM2 0C0.89543 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H8C9.10457 16 10 15.1046 10 14V2C10 0.89543 9.10457 0 8 0H2ZM1 2C1 1.44772 1.44772 1 2 1H8C8.55228 1 9 1.44772 9 2V14C9 14.5523 8.55228 15 8 15H2C1.44772 15 1 14.5523 1 14V2Z" fill="#717171"/>
        </svg>
      `;

    case SvgIcon.Chat:
      return html`
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C6.72679 16 5.49591 15.7018 4.38669 15.1393L4.266 15.075L0.621091 15.9851C0.311269 16.0625 0.0262241 15.8369 0.00130987 15.5438L0.00114131 15.4624L0.0149329 15.3787L0.925 11.735L0.86169 11.6153C0.406602 10.7186 0.124331 9.74223 0.0327466 8.72826L0.00737596 8.34634L0 8C0 3.58172 3.58172 0 8 0ZM8 1C4.13401 1 1 4.13401 1 8C1 9.21704 1.31054 10.3878 1.89352 11.4249C1.94046 11.5084 1.9621 11.603 1.95692 11.6973L1.94274 11.7912L1.187 14.812L4.21104 14.0583C4.27294 14.0429 4.33662 14.0396 4.39873 14.0479L4.4903 14.0691L4.57701 14.1075C5.61362 14.6898 6.7837 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM8.5 9C8.77614 9 9 9.22386 9 9.5C9 9.74546 8.82312 9.94961 8.58988 9.99194L8.5 10H5.5C5.22386 10 5 9.77614 5 9.5C5 9.25454 5.17688 9.05039 5.41012 9.00806L5.5 9H8.5ZM10.5 6C10.7761 6 11 6.22386 11 6.5C11 6.74546 10.8231 6.94961 10.5899 6.99194L10.5 7L5.5 7C5.22386 7 5 6.77614 5 6.5C5 6.25454 5.17688 6.05039 5.41012 6.00806L5.5 6L10.5 6Z" fill="#717171"/>
        </svg>
      `;

    case SvgIcon.Department:
      return html`
        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 1.5V3H2C0.895431 3 0 3.89543 0 5V12C0 13.1046 0.895432 14 2 14H14.0026C15.1071 14 16.0026 13.1046 16.0026 12V5C16.0026 3.89543 15.1071 3 14.0026 3H12V1.5C12 0.671573 11.3284 0 10.5 0H5.5C4.67157 0 4 0.671573 4 1.5ZM5.5 1H10.5C10.7761 1 11 1.22386 11 1.5V3H5V1.5C5 1.22386 5.22386 1 5.5 1ZM2 4H14.0026C14.5549 4 15.0026 4.44772 15.0026 5V7H12L12 6.50073C12 6.22459 11.7761 6.00073 11.5 6.00073C11.2239 6.00073 11 6.22459 11 6.50074L11 7H5V6.50073C5 6.22459 4.77614 6.00073 4.5 6.00073C4.22386 6.00073 4 6.22459 4 6.50073V7H1V5C1 4.44772 1.44772 4 2 4ZM11 8L11 8.5C11 8.77615 11.2239 9 11.5 9C11.7762 9 12 8.77614 12 8.5L12 8H15.0026V12C15.0026 12.5523 14.5549 13 14.0026 13H2C1.44772 13 1 12.5523 1 12V8H4V8.5C4 8.77614 4.22386 9 4.5 9C4.77614 9 5 8.77614 5 8.5V8H11Z" fill="#717171"/>
        </svg>
      `;

    case SvgIcon.Email:
      return html`
        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 0C14.8807 0 16 1.11929 16 2.5V10.5C16 11.8807 14.8807 13 13.5 13H2.5C1.11929 13 0 11.8807 0 10.5V2.5C0 1.11929 1.11929 0 2.5 0H13.5ZM15 3.961L8.25351 7.93097C8.12311 8.00767 7.96661 8.02045 7.82751 7.96932L7.74649 7.93097L1 3.963V10.5C1 11.3284 1.67157 12 2.5 12H13.5C14.3284 12 15 11.3284 15 10.5V3.961ZM13.5 1H2.5C1.67157 1 1 1.67157 1 2.5V2.802L8 6.91991L15 2.801V2.5C15 1.67157 14.3284 1 13.5 1Z" fill="#717171"/>
        </svg>
      `;

    case SvgIcon.OfficeLocation:
      return html`
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 7C10 8.65685 8.65685 10 7 10C5.34315 10 4 8.65685 4 7C4 5.34315 5.34315 4 7 4C8.65685 4 10 5.34315 10 7ZM9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9C8.10457 9 9 8.10457 9 7ZM11.9497 11.955C14.6834 9.2201 14.6834 4.78601 11.9497 2.05115C9.21608 -0.683716 4.78392 -0.683716 2.05025 2.05115C-0.683418 4.78601 -0.683418 9.2201 2.05025 11.955L3.57128 13.4538L5.61408 15.4389L5.74691 15.5567C6.52168 16.1847 7.65623 16.1455 8.38611 15.4391L10.8223 13.0691L11.9497 11.955ZM2.75499 2.75619C5.09944 0.410715 8.90055 0.410715 11.245 2.75619C13.5294 5.04153 13.5879 8.71039 11.4207 11.0667L11.245 11.2499L9.92371 12.5539L7.69315 14.7225L7.60016 14.8021C7.24594 15.0699 6.7543 15.0698 6.40012 14.802L6.30713 14.7224L3.3263 11.817L2.75499 11.2499L2.57927 11.0667C0.412077 8.71039 0.47065 5.04153 2.75499 2.75619Z" fill="#717171"/>
        </svg>
      `;

    case SvgIcon.Birthday:
      return html`
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.81357 0.667333C6.07581 0.320242 6.48151 0 7 0C7.51849 0 7.92419 0.320242 8.18643 0.667333C8.45471 1.0224 8.63508 1.47991 8.69561 1.93392C8.75552 2.3832 8.70532 2.89341 8.42852 3.3086C8.134 3.75039 7.63965 4 7 4C6.36035 4 5.866 3.75039 5.57148 3.3086C5.29468 2.89341 5.24448 2.3832 5.30439 1.93392C5.36492 1.47991 5.54529 1.0224 5.81357 0.667333ZM6.40353 2.7539C6.484 2.87461 6.63965 3 7 3C7.36035 3 7.516 2.87461 7.59647 2.7539C7.69468 2.60659 7.74448 2.3668 7.70439 2.06608C7.66492 1.77009 7.54529 1.4776 7.38857 1.27017C7.22581 1.05476 7.08151 1 7 1C6.91849 1 6.77419 1.05476 6.61143 1.27017C6.45471 1.4776 6.33508 1.77009 6.29561 2.06608C6.25552 2.3668 6.30532 2.60659 6.40353 2.7539ZM1 7C1 5.89543 1.89543 5 3 5H11C12.1046 5 13 5.89543 13 7V12H13.5C13.7761 12 14 12.2239 14 12.5C14 12.7761 13.7761 13 13.5 13H0.5C0.223858 13 0 12.7761 0 12.5C0 12.2239 0.223858 12 0.5 12H1V7ZM2 12H12V9.01931C11.9109 9.10285 11.8174 9.18842 11.7208 9.27412C11.4006 9.55804 11.0346 9.85319 10.6715 10.0802C10.3274 10.2953 9.90815 10.5 9.5 10.5C8.77182 10.5 8.30806 9.98986 8.00471 9.65617C7.9834 9.63273 7.96289 9.61016 7.94312 9.58869C7.5876 9.20261 7.35769 9 7 9C6.64231 9 6.4124 9.20261 6.05688 9.58869C6.03711 9.61016 6.0166 9.63273 5.99529 9.65617C5.69194 9.98986 5.22818 10.5 4.5 10.5C4.10587 10.5 3.69263 10.2897 3.35907 10.0789C3.00198 9.85313 2.63516 9.55951 2.31117 9.27666C2.20329 9.18247 2.09896 9.08844 2 8.9971V12ZM2 7.59993C2.05039 7.65198 2.11363 7.71652 2.1873 7.7902C2.38843 7.99132 2.6649 8.25801 2.96883 8.52334C3.27484 8.79049 3.59802 9.04687 3.89343 9.23362C4.21237 9.43525 4.41413 9.5 4.5 9.5C4.75817 9.5 4.93171 9.33433 5.32125 8.91131L5.32447 8.90781C5.65956 8.5439 6.16039 8 7 8C7.83961 8 8.34044 8.5439 8.67553 8.90781L8.67875 8.91131C9.06828 9.33433 9.24183 9.5 9.5 9.5C9.6106 9.5 9.82569 9.42967 10.1414 9.23229C10.4381 9.04681 10.7573 8.79196 11.0573 8.52588C11.3554 8.26163 11.6238 7.99594 11.8184 7.7955C11.89 7.72165 11.9513 7.65703 12 7.60506V7C12 6.44772 11.5523 6 11 6H3C2.44772 6 2 6.44772 2 7V7.59993Z" fill="#717171"/>
        </svg>
      `;

    case SvgIcon.Person:
      return html`
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0C4.79086 0 3 1.79086 3 4C3 6.20914 4.79086 8 7 8C9.20914 8 11 6.20914 11 4C11 1.79086 9.20914 0 7 0ZM4 4C4 2.34315 5.34315 1 7 1C8.65685 1 10 2.34315 10 4C10 5.65685 8.65685 7 7 7C5.34315 7 4 5.65685 4 4ZM2.00873 9C0.903151 9 0 9.88687 0 11C0 12.6912 0.83281 13.9663 2.13499 14.7966C3.41697 15.614 5.14526 16 7 16C8.85474 16 10.583 15.614 11.865 14.7966C13.1672 13.9663 14 12.6912 14 11C14 9.89557 13.1045 9.00001 12 9.00001L2.00873 9ZM1 11C1 10.4467 1.44786 10 2.00873 10L12 10C12.5522 10 13 10.4478 13 11C13 12.3088 12.3777 13.2837 11.3274 13.9534C10.2568 14.636 8.73511 15 7 15C5.26489 15 3.74318 14.636 2.67262 13.9534C1.62226 13.2837 1 12.3088 1 11Z" fill="#717171"/>
        </svg>
      `;

    case SvgIcon.Messages:
      return html`
        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 0C14.8807 0 16 1.11929 16 2.5V10.5C16 11.8807 14.8807 13 13.5 13H2.5C1.11929 13 0 11.8807 0 10.5V2.5C0 1.11929 1.11929 0 2.5 0H13.5ZM15 3.961L8.25351 7.93097C8.12311 8.00767 7.96661 8.02045 7.82751 7.96932L7.74649 7.93097L1 3.963V10.5C1 11.3284 1.67157 12 2.5 12H13.5C14.3284 12 15 11.3284 15 10.5V3.961ZM13.5 1H2.5C1.67157 1 1 1.67157 1 2.5V2.802L8 6.91991L15 2.801V2.5C15 1.67157 14.3284 1 13.5 1Z" fill="#717171"/>
        </svg>
      `;

    case SvgIcon.Organization:
      return html`
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.99992 0C6.34271 0 4.99927 1.34344 4.99927 3.00066C4.99927 4.48754 6.08073 5.72183 7.49999 5.95985V7.5H4.5C3.67157 7.5 3 8.17157 3 9V10.0416C1.5811 10.2799 0.5 11.514 0.5 13.0007C0.5 14.6579 1.84344 16.0013 3.50066 16.0013C5.15787 16.0013 6.50131 14.6579 6.50131 13.0007C6.50131 11.5136 5.41954 10.2791 4 10.0414V9C4 8.72386 4.22386 8.5 4.5 8.5H11.5C11.7761 8.5 12 8.72386 12 9V10.0416C10.5811 10.2799 9.5 11.514 9.5 13.0007C9.5 14.6579 10.8434 16.0013 12.5007 16.0013C14.1579 16.0013 15.5013 14.6579 15.5013 13.0007C15.5013 11.5136 14.4195 10.2791 13 10.0414V9C13 8.17157 12.3284 7.5 11.5 7.5H8.49999V5.95983C9.91918 5.72176 11.0006 4.48749 11.0006 3.00066C11.0006 1.34344 9.65714 0 7.99992 0ZM5.99927 3.00066C5.99927 1.89572 6.89499 1 7.99992 1C9.10485 1 10.0006 1.89572 10.0006 3.00066C10.0006 4.10559 9.10485 5.00131 7.99992 5.00131C6.89499 5.00131 5.99927 4.10559 5.99927 3.00066ZM1.5 13.0007C1.5 11.8957 2.39572 11 3.50066 11C4.60559 11 5.50131 11.8957 5.50131 13.0007C5.50131 14.1056 4.60559 15.0013 3.50066 15.0013C2.39572 15.0013 1.5 14.1056 1.5 13.0007ZM12.5007 11C13.6056 11 14.5013 11.8957 14.5013 13.0007C14.5013 14.1056 13.6056 15.0013 12.5007 15.0013C11.3957 15.0013 10.5 14.1056 10.5 13.0007C10.5 11.8957 11.3957 11 12.5007 11Z" fill="#717171"/>
        </svg>
      `;

    case SvgIcon.ExpandRight:
      return html`
        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12L6.5 6.5L1 1" stroke="#B8B8B8" stroke-width="2" />
        </svg>
      `;

    case SvgIcon.Profile:
      return html`
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0C4.79086 0 3 1.79086 3 4C3 6.20914 4.79086 8 7 8C9.20914 8 11 6.20914 11 4C11 1.79086 9.20914 0 7 0ZM4 4C4 2.34315 5.34315 1 7 1C8.65685 1 10 2.34315 10 4C10 5.65685 8.65685 7 7 7C5.34315 7 4 5.65685 4 4ZM2.00873 9C0.903151 9 0 9.88687 0 11C0 12.6912 0.83281 13.9663 2.13499 14.7966C3.41697 15.614 5.14526 16 7 16C8.85474 16 10.583 15.614 11.865 14.7966C13.1672 13.9663 14 12.6912 14 11C14 9.89557 13.1045 9.00001 12 9.00001L2.00873 9ZM1 11C1 10.4467 1.44786 10 2.00873 10L12 10C12.5522 10 13 10.4478 13 11C13 12.3088 12.3777 13.2837 11.3274 13.9534C10.2568 14.636 8.73511 15 7 15C5.26489 15 3.74318 14.636 2.67262 13.9534C1.62226 13.2837 1 12.3088 1 11Z" fill="#717171"/>
        </svg>
      `;

    case SvgIcon.File:
      return html`
        <svg width="28" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.64"
            d="M19.613 6.993L13.018 0.421C12.7473 0.15221 12.3815 0.000947397 12 0H1.4C0.628 0 0 0.615 0 1.372V24.642C0 25.391 0.622 26 1.386 26H18.6C19.372 26 20 25.385 20 24.628V7.923C20 7.577 19.86 7.237 19.613 6.993Z"
            fill="#605E5C"
          />
          <path
            d="M19 24.628C19 24.83 18.816 25 18.6 25H1.386C1.173 25 1 24.84 1 24.642V1.372C1 1.17 1.184 1 1.4 1H12V6.6C12 7.372 12.628 8 13.4 8H19V24.628Z"
            fill="white"
          />
          <path d="M18.204 6.99994L13 1.81494V6.59994C13 6.81994 13.18 6.99994 13.4 6.99994H18.204Z" fill="white" />
        </svg>
      `;

    case SvgIcon.Files:
      return html`
        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9956 4.07309V4C14.9956 2.61929 13.8763 1.5 12.4956 1.5H7.66418L6.06391 0.299946C5.80428 0.105247 5.48851 0 5.16399 0H2.5C1.11916 0 -0.000181445 1.11949 2.20615e-08 2.50033L0.0011832 11.4978C0.00135142 12.7772 0.962583 13.8321 2.2023 13.9798C2.2867 13.9945 2.37375 14.0021 2.46289 14.0021H13.1798C13.8981 14.0021 14.5156 13.4929 14.6524 12.7877L16.0097 5.78769C16.1587 5.01967 15.696 4.29703 14.9956 4.07309ZM2.5 1H5.16399C5.27216 1 5.37742 1.03508 5.46396 1.09998L7.19756 2.40002C7.2841 2.46492 7.38936 2.5 7.49753 2.5H12.4956C13.324 2.5 13.9956 3.17157 13.9956 4V4.00214H3.824C3.10596 4.00214 2.48863 4.511 2.35158 5.21583L1.05351 11.8916C1.01941 11.7661 1.0012 11.634 1.00118 11.4976L1 2.5002C0.999891 1.67169 1.6715 1 2.5 1ZM3.33319 5.4067C3.37888 5.17176 3.58465 5.00214 3.824 5.00214H14.5372C14.8515 5.00214 15.0879 5.28874 15.028 5.59732L13.6706 12.5973C13.6251 12.8324 13.4192 13.0021 13.1798 13.0021H2.46289C2.14845 13.0021 1.91206 12.7154 1.97208 12.4067L3.33319 5.4067Z" fill="#717171"/>
        </svg>
      `;

    case SvgIcon.Back:
      return html`
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 8.5H1.95312L8.10156 14.6484L7.39844 15.3516L0.046875 8L7.39844 0.648438L8.10156 1.35156L1.95312 7.5H16V8.5Z"
          />
        </svg>
      `;

    case SvgIcon.Close:
      return html`
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.73838 5.032L9.70337 1.067L8.99638 0.360001L5.03137 4.325L1.06637 0.360001L0.359375 1.067L4.32438 5.032L0.359375 8.997L1.06637 9.704L5.03137 5.739L8.99638 9.704L9.70337 8.997L5.73838 5.032Z" fill="black"/>
        </svg>
     `;
    case SvgIcon.Upload:
      return html`
        <svg class="upload-icon" width="21" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 2C4.08579 2 3.75 2.33579 3.75 2.75C3.75 3.16421 4.08579 3.5 4.5 3.5H15C15.4142 3.5 15.75 3.16421 15.75 2.75C15.75 2.33579 15.4142 2 15 2H4.5ZM10.4963 17.3493C10.4466 17.7154 10.1328 17.9976 9.75311 17.9976C9.3389 17.9976 9.00311 17.6618 9.00311 17.2476L9.00249 7.05856L6.02995 10.026L5.94578 10.0986C5.65202 10.3162 5.23537 10.2917 4.96929 10.0253C4.67661 9.73215 4.67695 9.25728 4.97005 8.96459L9.25962 4.67989C9.33377 4.61512 9.42089 4.56485 9.5169 4.53385L9.59777 4.51072C9.64749 4.50019 9.69837 4.4947 9.74849 4.4947L9.80855 4.49661L9.87781 4.50451L9.99828 4.53462L10.0895 4.57254L10.1259 4.59371L10.2169 4.6523L10.2875 4.71481L14.5303 8.96546L14.6029 9.04964C14.8205 9.34345 14.7959 9.7601 14.5294 10.0261L14.4452 10.0987C14.1514 10.3162 13.7347 10.2917 13.4687 10.0251L10.5025 7.05456L10.5031 17.2476L10.4963 17.3493Z" fill="#ffffff"/>
        </svg>
      `;

    case SvgIcon.FileCloud:
      return html`
        <svg width="16" height="16"  xmlns="http://www.w3.org/2000/svg">
          <path
            d="m8,0c2.8166,0 4.4145,1.9233 4.6469,4.246l0.071,0c1.8127,0 3.2821,1.5119 3.2821,3.377c0,0.0953 -0.0038,0.1897 -0.0114,0.283c-0.322,-0.4017 -0.6967,-0.7591 -1.1138,-1.062c-0.3104,-0.9329 -1.1627,-1.598 -2.1568,-1.598l-0.0711,0c-0.5137,0 -0.9439,-0.3893 -0.9951,-0.9005c-0.2021,-2.0206 -1.5433,-3.3455 -3.6518,-3.3455c-2.1139,0 -3.4489,1.3159 -3.6518,3.3455c-0.0511,0.5112 -0.4813,0.9005 -0.9951,0.9005l-0.071,0c-1.2539,0 -2.2821,1.0579 -2.2821,2.377c0,1.3191 1.0282,2.377 2.2821,2.377l2.6655,0c-0.087,0.323 -0.1466,0.6572 -0.1762,1l-2.4893,0c-1.8127,0 -3.2821,-1.5119 -3.2821,-3.377c0,-1.8029 1.3731,-3.2758 3.102,-3.372l0.2511,-0.005c0.2338,-2.338 1.8303,-4.246 4.6469,-4.246zm3.5,16c2.4853,0 4.5,-2.0147 4.5,-4.5c0,-2.4853 -2.0147,-4.5 -4.5,-4.5c-2.4853,0 -4.5,2.0147 -4.5,4.5c0,2.4853 2.0147,4.5 4.5,4.5zm0,-7c0.2761,0 0.5,0.2239 0.5,0.5l0,1.5l1.5,0c0.2761,0 0.5,0.2239 0.5,0.5c0,0.2761 -0.2239,0.5 -0.5,0.5l-1.5,0l0,1.5c0,0.2761 -0.2239,0.5 -0.5,0.5c-0.2761,0 -0.5,-0.2239 -0.5,-0.5l0,-1.5l-1.5,0c-0.2761,0 -0.5,-0.2239 -0.5,-0.5c0,-0.2761 0.2239,-0.5 0.5,-0.5l1.5,0l0,-1.5c0,-0.2761 0.2239,-0.5 0.5,-0.5z" fill="#0078D4"
          />
        </svg>
      `;

    case SvgIcon.DragFile:
      return html`
        <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m0,1.00189c0,-0.8451 0.983,-1.3091 1.636,-0.772l11.006,9.0622c0.724,0.5964 0.302,1.772 -0.636,1.772l-5.592,0c-0.435,0 -0.849,0.1892 -1.134,0.5185l-3.524,4.0725c-0.606,0.7003 -1.756,0.2717 -1.756,-0.6544l0,-13.9988zm12.006,9.0622l-11.006,-9.0622l0,13.9988l3.524,-4.0724c0.475,-0.5488 1.164,-0.8642 1.89,-0.8642l5.592,0z"
          />
        </svg>
      `;

    case SvgIcon.Cancel:
      return html`
        <svg class="cancel-icon" width="10" height="10" xmlns="http://www.w3.org/2000/svg">
          <path
          d="m5.52795,4.92946l4.37418,4.36141l-0.57055,0.56806l-4.38052,-4.35509l-4.38052,4.35509l-0.57055,-0.56806l4.37418,-4.36141l-4.37418,-4.36141l0.57055,-0.56806l4.38052,4.35509l4.38052,-4.35509l0.57055,0.56806l-4.37418,4.36141z"
          />
        </svg>
      `;

    case SvgIcon.Success:
      return html`
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path fill="#009E00" d="m6.322,12c3.492,0 6.323,-2.6863 6.323,-6c0,-3.3137 -2.831,-6 -6.323,-6c-3.491,0 -6.322,2.6863 -6.322,6c0,3.3137 2.831,6 6.322,6z"/>
          <path fill="white" d="m9.629,3.7509c-0.131,-0.125 -0.31,-0.1952 -0.496,-0.1952c-0.187,0 -0.365,0.0702 -0.497,0.1952l-3.267,3.1l-1.393,-1.3222c-0.177,-0.1695 -0.436,-0.2361 -0.68,-0.1746c-0.243,0.0615 -0.433,0.2418 -0.497,0.4725c-0.065,0.2307 0.005,0.4767 0.184,0.6449l1.807,1.7154c0.019,0.0331 0.041,0.0646 0.066,0.094c0.289,0.2562 0.738,0.2562 1.027,0c0.024,-0.0294 0.047,-0.0609 0.065,-0.0941l3.681,-3.4931c0.275,-0.2603 0.275,-0.6824 0,-0.9428z"/>
        </svg>
      `;

    case SvgIcon.Fail:
      return html`
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path fill="#EF355D" d="m6,12c3.314,0 6,-2.6863 6,-6c0,-3.3137 -2.686,-6 -6,-6c-3.314,0 -6,2.6863 -6,6c0,3.3137 2.686,6 6,6z"/>
          <path fill="white" d="m6.943,6.0004l1.544,-1.5444c0.169,-0.1683 0.236,-0.4142 0.174,-0.6448c-0.061,-0.2306 -0.241,-0.4107 -0.472,-0.4722c-0.231,-0.0616 -0.477,0.0049 -0.645,0.1742l-1.544,1.5443l-1.545,-1.5443c-0.26,-0.259 -0.681,-0.2583 -0.941,0.0014c-0.26,0.2598 -0.26,0.6808 -0.001,0.9414l1.544,1.5444l-1.544,1.5444c-0.259,0.2606 -0.259,0.6815 0.001,0.9413c0.26,0.2598 0.681,0.2604 0.941,0.0015l1.545,-1.5444l1.544,1.5444c0.261,0.2589 0.682,0.2583 0.942,-0.0015c0.259,-0.2598 0.26,-0.6807 0.001,-0.9413l-1.544,-1.5444z" />
        </svg>
      `;

    case SvgIcon.SelectAccount:
      return html`
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
      <path fill=${color} d="M6.22176 13.9567C3.55468 13.653 2 11.8026 2 10V9.5C2 8.67157 2.67157 8 3.5 8H5.59971C5.43777 8.31679 5.30564 8.65136 5.20703 9H3.5C3.22386 9 3 9.22386 3 9.5V10C3 11.1281 3.88187 12.333 5.50235 12.7996C5.69426 13.216 5.93668 13.6043 6.22176 13.9567ZM9.62596 5.06907C9.70657 4.81036 9.75 4.53525 9.75 4.25C9.75 2.73122 8.51878 1.5 7 1.5C5.48122 1.5 4.25 2.73122 4.25 4.25C4.25 5.53662 5.13357 6.61687 6.32704 6.91706C6.64202 6.55055 7.00446 6.226 7.40482 5.95294C7.27488 5.98371 7.13934 6 7 6C6.0335 6 5.25 5.2165 5.25 4.25C5.25 3.2835 6.0335 2.5 7 2.5C7.9665 2.5 8.75 3.2835 8.75 4.25C8.75 4.73141 8.55561 5.16743 8.24104 5.48382C8.67558 5.28783 9.14016 5.14664 9.62596 5.06907ZM10.5 15C12.9853 15 15 12.9853 15 10.5C15 8.01472 12.9853 6 10.5 6C8.01472 6 6 8.01472 6 10.5C6 12.9853 8.01472 15 10.5 15ZM10.5 8C10.7761 8 11 8.22386 11 8.5V10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H11V12.5C11 12.7761 10.7761 13 10.5 13C10.2239 13 10 12.7761 10 12.5V11H8.5C8.22386 11 8 10.7761 8 10.5C8 10.2239 8.22386 10 8.5 10H10V8.5C10 8.22386 10.2239 8 10.5 8Z"/>
    </svg>
  `;
  }
}
