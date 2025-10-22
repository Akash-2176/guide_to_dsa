import { useState, useEffect } from "react";

// 60-Day DSA Checklist & Tracker
// Single-file React component (Tailwind CSS classes used for styling)
// Data: day-by-day checklist with topic, focus, references, and 3-5 problems (each with a unique problem number and link)

const DATA = [
  {
    day: 1,
    topic: "Time & Space Complexity (Big-O)",
    content:
      "Understand Big-O, best/avg/worst cases, space complexity, analyze small code snippets",
    references: [
      {
        title: "Big-O Cheat Sheet (GFG)",
        url: "https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/",
      },
      {
        title: "LeetCode: Fun with Arrays (Complexity reasoning)",
        url: "https://leetcode.com/explore/learn/card/fun-with-arrays/",
      },
    ],
    problems: [
      {
        id: "LC-1",
        title: "Two Sum",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/two-sum/",
      },
      {
        id: "LC-724",
        title: "Find Pivot Index",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/find-pivot-index/",
      },
      {
        id: "HR-RS",
        title: "Repeated String (analysis)",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/repeated-string/problem",
      },
      {
        id: "LC-26",
        title: "Remove Duplicates from Sorted Array",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
      },
    ],
  },
  {
    day: 2,
    topic: "Arrays — Traversal & Basic Operations",
    content: "In-place vs extra space, reversal, rotate, two-pointer basics",
    references: [
      {
        title: "LeetCode Arrays 101",
        url: "https://leetcode.com/explore/learn/card/fun-with-arrays/",
      },
    ],
    problems: [
      {
        id: "LC-283",
        title: "Move Zeroes",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/move-zeroes/",
      },
      {
        id: "LC-414",
        title: "Third Maximum Number",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/third-maximum-number/",
      },
      {
        id: "LC-189",
        title: "Rotate Array",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/rotate-array/",
      },
      {
        id: "LC-350",
        title: "Intersection of Two Arrays II",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
      },
    ],
  },
  {
    day: 3,
    topic: "Arrays — Searching & Sorting Basics",
    content: "Sorting costs, binary search, two-pointer on sorted arrays",
    references: [
      {
        title: "Binary Search Guide",
        url: "https://www.geeksforgeeks.org/binary-search/",
      },
    ],
    problems: [
      {
        id: "LC-167",
        title: "Two Sum II - Input Array Is Sorted",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
      },
      {
        id: "LC-238",
        title: "Product of Array Except Self",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/product-of-array-except-self/",
      },
      {
        id: "LC-56",
        title: "Merge Intervals",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/merge-intervals/",
      },
      {
        id: "LC-33",
        title: "Search in Rotated Sorted Array",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      },
    ],
  },
  {
    day: 4,
    topic: "Strings — Manipulation (basic)",
    content: "Traversal, immutability concerns, substring ops",
    references: [
      {
        title: "HackerRank Strings",
        url: "https://www.hackerrank.com/domains/strings",
      },
    ],
    problems: [
      {
        id: "HR-FS",
        title: "Find a String",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/find-a-string/problem",
      },
      {
        id: "HR-CT",
        title: "C Tutorial: Strings",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/c-tutorial-strings/problem",
      },
      {
        id: "LC-125",
        title: "Valid Palindrome",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/valid-palindrome/",
      },
      {
        id: "LC-344",
        title: "Reverse String",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/reverse-string/",
      },
    ],
  },
  {
    day: 5,
    topic: "Strings — Pattern, Frequency & Sliding Window Intro",
    content: "Frequency maps, window technique for substrings",
    references: [
      {
        title: "Sliding Window Pattern",
        url: "https://www.geeksforgeeks.org/sliding-window-technique/",
      },
    ],
    problems: [
      {
        id: "HR-SVS",
        title: "Sherlock and the Valid String",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem",
      },
      {
        id: "HR-TS",
        title: "Two Strings",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/two-strings/problem",
      },
      {
        id: "LC-3",
        title: "Longest Substring Without Repeating Characters",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      },
    ],
  },
  {
    day: 6,
    topic: "Recursion — Basics",
    content: "Recursion flow, stack usage, naive vs optimized",
    references: [
      {
        title: "Recursion Primer (GFG)",
        url: "https://www.geeksforgeeks.org/recursion/",
      },
    ],
    problems: [
      {
        id: "LC-70",
        title: "Climbing Stairs",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/climbing-stairs/",
      },
      {
        id: "HR-FIB",
        title: "Recursion: Fibonacci",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem",
      },
      {
        id: "LC-22",
        title: "Generate Parentheses",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/generate-parentheses/",
      },
    ],
  },
  {
    day: 7,
    topic: "Recursion — Backtracking Intro",
    content: "Subsets/permutations, pruning, complexity explosion",
    references: [
      {
        title: "Backtracking Guide",
        url: "https://www.geeksforgeeks.org/backtracking-algorithms/",
      },
    ],
    problems: [
      {
        id: "LC-78",
        title: "Subsets",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/subsets/",
      },
      {
        id: "LC-46",
        title: "Permutations",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/permutations/",
      },
      {
        id: "LC-39",
        title: "Combination Sum",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/combination-sum/",
      },
    ],
  },
  {
    day: 8,
    topic: "Linked List — Single Linked List Basics",
    content: "Structure, insertion, deletion, traversal, no random access",
    references: [
      {
        title: "Linked List Intro",
        url: "https://www.geeksforgeeks.org/data-structures/linked-list/",
      },
    ],
    problems: [
      {
        id: "LC-206",
        title: "Reverse Linked List",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/reverse-linked-list/",
      },
      {
        id: "LC-141",
        title: "Linked List Cycle",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/linked-list-cycle/",
      },
      {
        id: "LC-21",
        title: "Merge Two Sorted Lists",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/merge-two-sorted-lists/",
      },
    ],
  },
  {
    day: 9,
    topic: "Linked List — Advanced (Loops, Intersection)",
    content: "Floyd cycle, intersection detection, doubly/circular nuances",
    references: [
      {
        title: "Detect Cycle",
        url: "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/",
      },
    ],
    problems: [
      {
        id: "LC-142",
        title: "Linked List Cycle II",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/linked-list-cycle-ii/",
      },
      {
        id: "LC-160",
        title: "Intersection of Two Linked Lists",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
      },
      {
        id: "LC-430",
        title: "Flatten a Multilevel Doubly Linked List",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
      },
    ],
  },
  {
    day: 10,
    topic: "Stacks — Theory & Use Cases",
    content: "LIFO, parentheses matching, next greater element patterns",
    references: [
      {
        title: "Stack Data Structure",
        url: "https://www.geeksforgeeks.org/stack-data-structure/",
      },
    ],
    problems: [
      {
        id: "LC-20",
        title: "Valid Parentheses",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        id: "LC-496",
        title: "Next Greater Element I",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/next-greater-element-i/",
      },
      {
        id: "HR-BB",
        title: "Balanced Brackets",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/balanced-brackets/problem",
      },
    ],
  },
  // Days 11-60: continue the same structure with topics from queues, hashing, trees, graphs, DP, greedy, bitmask, segment tree, tries, advanced graphs, contests, and projects
  // For brevity in code editing, full 60-day dataset will be created below.

  // --- We'll now include days 11 through 60 with full entries ---

  {
    day: 11,
    topic: "Queues & Deques",
    content: "FIFO, circular queue, deque operations, sliding window max",
    references: [
      {
        title: "Queue Basics",
        url: "https://www.geeksforgeeks.org/queue-data-structure/",
      },
    ],
    problems: [
      {
        id: "LC-239",
        title: "Sliding Window Maximum",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/sliding-window-maximum/",
      },
      {
        id: "HR-QQ",
        title: "Queue using Two Stacks",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/queue-using-two-stacks/problem",
      },
      {
        id: "LC-622",
        title: "Design Circular Queue",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/design-circular-queue/",
      },
    ],
  },
  {
    day: 12,
    topic: "Hashing & HashMap",
    content: "Frequency counts, hashing collisions, hashmap best practices",
    references: [
      {
        title: "Hashing in DS",
        url: "https://www.geeksforgeeks.org/hashing-data-structure/",
      },
    ],
    problems: [
      {
        id: "LC-1-dup",
        title: "Two Sum (hashmap)",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/two-sum/",
      },
      {
        id: "LC-387",
        title: "First Unique Character in a String",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/first-unique-character-in-a-string/",
      },
      {
        id: "LC-594",
        title: "Longest Harmonious Subsequence",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/longest-harmonious-subsequence/",
      },
    ],
  },
  {
    day: 13,
    topic: "Sets & HashSet",
    content: "Duplicate removal, set operations, intersection/union",
    references: [
      {
        title: "Set Data Structure",
        url: "https://www.geeksforgeeks.org/set-data-structure-in-c-stl/",
      },
    ],
    problems: [
      {
        id: "LC-217",
        title: "Contains Duplicate",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/contains-duplicate/",
      },
      {
        id: "LC-349",
        title: "Intersection of Two Arrays",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/intersection-of-two-arrays/",
      },
      {
        id: "HR-PS",
        title: "Pairs (using set)",
        platform: "HackerRank",
        url: "https://www.hackerrank.com/challenges/pairs/problem",
      },
    ],
  },
  {
    day: 14,
    topic: "Revision + Timed Problems",
    content: "Mixed-topic practice under time; analyze complexity",
    references: [
      {
        title: "LeetCode Explore: Practice",
        url: "https://leetcode.com/explore/",
      },
    ],
    problems: [
      {
        id: "LC-20-r",
        title: "Valid Parentheses (revise)",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        id: "LC-125-r",
        title: "Valid Palindrome (revise)",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/valid-palindrome/",
      },
      {
        id: "LC-283-r",
        title: "Move Zeroes (revise)",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/move-zeroes/",
      },
    ],
  },
  {
    day: 15,
    topic: "Mock Test (2 hours)",
    content:
      "Simulate interview/test: 2 hours, 4–5 problems; post-mortem analysis",
    references: [
      { title: "How to do a mock interview", url: "https://www.pramp.com/" },
    ],
    problems: [
      {
        id: "LC-M1",
        title: "Mixed: Array/String/LinkedList",
        platform: "LeetCode",
        url: "https://leetcode.com/problemset/all/",
      },
    ],
  },
  {
    day: 16,
    topic: "Trees — Basics (traversals)",
    content: "Inorder, Preorder, Postorder, recursive & iterative",
    references: [
      {
        title: "Tree Traversals",
        url: "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/",
      },
    ],
    problems: [
      {
        id: "LC-94",
        title: "Binary Tree Inorder Traversal",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
      },
      {
        id: "LC-144",
        title: "Binary Tree Preorder Traversal",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/binary-tree-preorder-traversal/",
      },
      {
        id: "LC-145",
        title: "Binary Tree Postorder Traversal",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/binary-tree-postorder-traversal/",
      },
    ],
  },
  {
    day: 17,
    topic: "Binary Search Trees (BST)",
    content: "BST insert/delete/search, inorder gives sorted order",
    references: [
      {
        title: "BST Basics",
        url: "https://www.geeksforgeeks.org/binary-search-tree-data-structure/",
      },
    ],
    problems: [
      {
        id: "LC-700",
        title: "Search in a BST",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/search-in-a-binary-search-tree/",
      },
      {
        id: "LC-450",
        title: "Delete Node in a BST",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/delete-node-in-a-bst/",
      },
      {
        id: "LC-98",
        title: "Validate Binary Search Tree",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/validate-binary-search-tree/",
      },
    ],
  },
  {
    day: 18,
    topic: "Trees — Advanced (LCA, diameter)",
    content: "Lowest Common Ancestor, tree diameter, level order tricks",
    references: [
      {
        title: "LCA Discussion",
        url: "https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/",
      },
    ],
    problems: [
      {
        id: "LC-236",
        title: "Lowest Common Ancestor of a Binary Tree",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
      },
      {
        id: "LC-543",
        title: "Diameter of Binary Tree",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/diameter-of-binary-tree/",
      },
      {
        id: "LC-102",
        title: "Binary Tree Level Order Traversal",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      },
    ],
  },
  {
    day: 19,
    topic: "Graphs — Representation & Traversals (BFS/DFS)",
    content: "Adjacency list/matrix, BFS & DFS patterns",
    references: [
      {
        title: "Graph Representation",
        url: "https://www.geeksforgeeks.org/graph-and-its-representations/",
      },
    ],
    problems: [
      {
        id: "LC-200",
        title: "Number of Islands",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        id: "LC-133",
        title: "Clone Graph",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/clone-graph/",
      },
      {
        id: "LC-207",
        title: "Course Schedule",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/course-schedule/",
      },
    ],
  },
  {
    day: 20,
    topic: "Graphs — Weighted & Shortest Paths",
    content: "Dijkstra, Bellman-Ford basics, priority queue use",
    references: [
      {
        title: "Dijkstra",
        url: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/",
      },
    ],
    problems: [
      {
        id: "LC-743",
        title: "Network Delay Time",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/network-delay-time/",
      },
      {
        id: "LC-787",
        title: "Cheapest Flights Within K Stops",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
      },
      {
        id: "LC-1631",
        title: "Path With Minimum Effort",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/path-with-minimum-effort/",
      },
    ],
  },
  {
    day: 21,
    topic: "Graphs — Union-Find & Cycle Detection",
    content: "Union-Find DSU, cycle detection in undirected graphs",
    references: [
      {
        title: "DSU (Union-Find)",
        url: "https://www.geeksforgeeks.org/disjoint-set-data-structures/",
      },
    ],
    problems: [
      {
        id: "LC-990",
        title: "Satisfiability of Equality Equations",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/satisfiability-of-equality-equations/",
      },
      {
        id: "LC-684",
        title: "Redundant Connection",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/redundant-connection/",
      },
      {
        id: "LC-261",
        title: "Graph Valid Tree",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/graph-valid-tree/",
      },
    ],
  },
  {
    day: 22,
    topic: "Greedy Algorithms",
    content: "Greedy choice property, prove correctness ideas",
    references: [
      {
        title: "Greedy Algorithm",
        url: "https://www.geeksforgeeks.org/greedy-algorithm/",
      },
    ],
    problems: [
      {
        id: "LC-452",
        title: "Minimum Number of Arrows to Burst Balloons",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
      },
      {
        id: "LC-435",
        title: "Non-overlapping Intervals",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/non-overlapping-intervals/",
      },
      {
        id: "LC-45",
        title: "Jump Game II",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/jump-game-ii/",
      },
    ],
  },
  {
    day: 23,
    topic: "Divide & Conquer",
    content: "MergeSort, QuickSort, BST divide patterns, recurrence relations",
    references: [
      {
        title: "Divide and Conquer",
        url: "https://www.geeksforgeeks.org/divide-and-conquer-algorithm/",
      },
    ],
    problems: [
      {
        id: "LC-215",
        title: "Kth Largest Element in an Array",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      },
      {
        id: "LC-912",
        title: "Sort an Array (merge sort)",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/sort-an-array/",
      },
      {
        id: "LC-240",
        title: "Search a 2D Matrix II",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
      },
    ],
  },
  {
    day: 24,
    topic: "Dynamic Programming — Intro",
    content: "Memoization vs tabulation, overlapping subproblems",
    references: [
      {
        title: "DP Basics",
        url: "https://www.geeksforgeeks.org/dynamic-programming/",
      },
    ],
    problems: [
      {
        id: "LC-70-r",
        title: "Climbing Stairs (DP)",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/climbing-stairs/",
      },
      {
        id: "LC-198",
        title: "House Robber",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/house-robber/",
      },
      {
        id: "LC-509",
        title: "Fibonacci Number (DP)",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/fibonacci-number/",
      },
    ],
  },
  {
    day: 25,
    topic: "Dynamic Programming — Medium (LIS, Knapsack)",
    content: "Longest Increasing Subsequence, 0/1 Knapsack patterns",
    references: [
      {
        title: "LIS and DP",
        url: "https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/",
      },
    ],
    problems: [
      {
        id: "LC-300",
        title: "Longest Increasing Subsequence",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/longest-increasing-subsequence/",
      },
      {
        id: "LC-416",
        title: "Partition Equal Subset Sum (knapsack pattern)",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/partition-equal-subset-sum/",
      },
      {
        id: "LC-494",
        title: "Target Sum",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/target-sum/",
      },
    ],
  },
  {
    day: 26,
    topic: "DP — String Problems (LCS, Edit Distance)",
    content: "LCS, Edit distance, DP on strings",
    references: [
      {
        title: "Edit Distance",
        url: "https://www.geeksforgeeks.org/edit-distance-dp-5/",
      },
    ],
    problems: [
      {
        id: "LC-1143",
        title: "Longest Common Subsequence",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/longest-common-subsequence/",
      },
      {
        id: "LC-72",
        title: "Edit Distance",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/edit-distance/",
      },
      {
        id: "LC-583",
        title: "Delete Operation for Two Strings",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/delete-operation-for-two-strings/",
      },
    ],
  },
  {
    day: 27,
    topic: "Bit Manipulation",
    content: "XOR tricks, bit counts, toggles, masks",
    references: [
      {
        title: "Bit Manipulation Techniques",
        url: "https://www.geeksforgeeks.org/bitwise-algorithms/",
      },
    ],
    problems: [
      {
        id: "LC-136",
        title: "Single Number",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/single-number/",
      },
      {
        id: "LC-190",
        title: "Reverse Bits",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/reverse-bits/",
      },
      {
        id: "LC-371",
        title: "Sum of Two Integers",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/sum-of-two-integers/",
      },
    ],
  },
  {
    day: 28,
    topic: "Sliding Window & Prefix Sum",
    content: "Prefix sums for range queries, Kadane, fixed & variable windows",
    references: [
      {
        title: "Prefix Sum Technique",
        url: "https://www.geeksforgeeks.org/prefix-sum-array/",
      },
    ],
    problems: [
      {
        id: "LC-53",
        title: "Maximum Subarray (Kadane)",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        id: "LC-560",
        title: "Subarray Sum Equals K",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/subarray-sum-equals-k/",
      },
      {
        id: "LC-76",
        title: "Minimum Window Substring",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/minimum-window-substring/",
      },
    ],
  },
  {
    day: 29,
    topic: "Two Pointer & Fast-Slow Techniques",
    content: "Detect cycle, middle element, pair-sum in sorted arrays",
    references: [
      {
        title: "Two Pointers",
        url: "https://www.geeksforgeeks.org/two-pointers-technique/",
      },
    ],
    problems: [
      {
        id: "LC-141-r",
        title: "Linked List Cycle (Floyd)",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/linked-list-cycle/",
      },
      {
        id: "LC-876",
        title: "Middle of the Linked List",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/middle-of-the-linked-list/",
      },
      {
        id: "LC-11",
        title: "Container With Most Water",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/container-with-most-water/",
      },
    ],
  },
  {
    day: 30,
    topic: "Heaps & Priority Queues",
    content: "Heap operations, top-k problems, stream median patterns",
    references: [
      {
        title: "Heap DS",
        url: "https://www.geeksforgeeks.org/heap-data-structure/",
      },
    ],
    problems: [
      {
        id: "LC-215-r",
        title: "Kth Largest Element in an Array",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      },
      {
        id: "LC-347",
        title: "Top K Frequent Elements",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/top-k-frequent-elements/",
      },
      {
        id: "LC-295",
        title: "Find Median from Data Stream",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/find-median-from-data-stream/",
      },
    ],
  },
  {
    day: 31,
    topic: "Tries — Prefix Trees",
    content: "Prefix insert/search, autocomplete, memory tradeoffs",
    references: [
      {
        title: "Trie Data Structure",
        url: "https://www.geeksforgeeks.org/trie-insert-and-search/",
      },
    ],
    problems: [
      {
        id: "LC-208",
        title: "Implement Trie (Prefix Tree)",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/implement-trie-prefix-tree/",
      },
      {
        id: "LC-211",
        title: "Add and Search Word - Data structure design",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/add-and-search-word-data-structure-design/",
      },
      {
        id: "LC-648",
        title: "Replace Words",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/replace-words/",
      },
    ],
  },
  {
    day: 32,
    topic: "Recursion + DP Hybrids",
    content: "N-Queens, Sudoku solver: recursion with pruning and memoization",
    references: [
      {
        title: "N-Queens",
        url: "https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/",
      },
    ],
    problems: [
      {
        id: "LC-51",
        title: "N-Queens",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/n-queens/",
      },
      {
        id: "LC-37",
        title: "Sudoku Solver",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/sudoku-solver/",
      },
    ],
  },
  {
    day: 33,
    topic: "Revision — Graph + DP Mix",
    content: "Timed mixed practice focusing on graph+dp overlap",
    references: [
      {
        title: "Practice Problems",
        url: "https://leetcode.com/problemset/all/",
      },
    ],
    problems: [
      {
        id: "LC-329",
        title: "Longest Increasing Path in a Matrix",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
      },
      {
        id: "LC-321",
        title: "Create Maximum Number (DP+Greedy blend)",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/create-maximum-number/",
      },
    ],
  },
  {
    day: 34,
    topic: "Mock Test (Full Length)",
    content: "3–4 hour contest simulation; analyze T/S complexity",
    references: [
      {
        title: "CodeChef Long Contests",
        url: "https://www.codechef.com/contests",
      },
    ],
    problems: [
      {
        id: "CC-LONG",
        title: "Pick 3-4 problems from CodeChef Long",
        platform: "CodeChef",
        url: "https://www.codechef.com/contests",
      },
    ],
  },
  {
    day: 35,
    topic: "Rest + Review",
    content: "Review notes, flashcards, and weak topics",
    references: [],
    problems: [],
  },
  {
    day: 36,
    topic: "Mixed Arrays + Hash + Sliding Window Twists",
    content: "Combine techniques to solve tricky array variants",
    references: [
      {
        title: "Mixing Techniques",
        url: "https://leetcode.com/tag/two-pointers/",
      },
    ],
    problems: [
      {
        id: "LC-209",
        title: "Minimum Size Subarray Sum",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/minimum-size-subarray-sum/",
      },
      {
        id: "LC-560-r",
        title: "Subarray Sum Equals K (revise)",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/subarray-sum-equals-k/",
      },
      {
        id: "LC-713",
        title: "Subarray Product Less Than K",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/subarray-product-less-than-k/",
      },
    ],
  },
  {
    day: 37,
    topic: "Graph + BFS/DFS Combo Problems",
    content: "Layered BFS, multi-source BFS, grid-graph patterns",
    references: [
      {
        title: "Multi-source BFS",
        url: "https://www.geeksforgeeks.org/multi-source-bfs/",
      },
    ],
    problems: [
      {
        id: "LC-127",
        title: "Word Ladder",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/word-ladder/",
      },
      {
        id: "LC-994",
        title: "Rotting Oranges",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/rotting-oranges/",
      },
      {
        id: "LC-279",
        title: "Perfect Squares (BFS/DP touch)",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/perfect-squares/",
      },
    ],
  },
  {
    day: 38,
    topic: "DP + Recursion Twists",
    content: "Optimize recursive solutions into DP, space-optimized DP",
    references: [
      {
        title: "DP Space Optimization",
        url: "https://www.geeksforgeeks.org/space-optimization-in-dynamic-programming/",
      },
    ],
    problems: [
      {
        id: "LC-120",
        title: "Triangle",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/triangle/",
      },
      {
        id: "LC-322",
        title: "Coin Change",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/coin-change/",
      },
      {
        id: "LC-221",
        title: "Maximal Square",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/maximal-square/",
      },
    ],
  },
  {
    day: 39,
    topic: "Backtracking + Pruning Advanced",
    content: "Design pruning heuristics, branch and bound ideas",
    references: [
      {
        title: "Backtracking Optimizations",
        url: "https://www.geeksforgeeks.org/optimizations-in-backtracking/",
      },
    ],
    problems: [
      {
        id: "LC-79",
        title: "Word Search",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/word-search/",
      },
      {
        id: "LC-37-r",
        title: "Sudoku Solver (revise)",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/sudoku-solver/",
      },
    ],
  },
  {
    day: 40,
    topic: "Heap + HashMap Complex Problems",
    content: "Combine heaps and hashmaps for streaming/top-k tasks",
    references: [
      {
        title: "Heaps + Hashing",
        url: "https://www.geeksforgeeks.org/heap-and-hash/",
      },
    ],
    problems: [
      {
        id: "LC-295-r",
        title: "Find Median from Data Stream (revise)",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/find-median-from-data-stream/",
      },
      {
        id: "LC-347-r",
        title: "Top K Frequent Elements (revise)",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/top-k-frequent-elements/",
      },
      {
        id: "LC-703",
        title: "Kth Largest Element in a Stream",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
      },
    ],
  },
  {
    day: 41,
    topic: "Bitmask DP / Bitmask Techniques",
    content: "DP over subsets, bitmasking for state compression",
    references: [
      {
        title: "Bitmask DP",
        url: "https://cp-algorithms.com/dynamic_programming/bitmask.html",
      },
    ],
    problems: [
      {
        id: "LC-474",
        title: "Ones and Zeroes",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/ones-and-zeroes/",
      },
      {
        id: "GFG-TSP",
        title: "TSP DP (small n)",
        platform: "GFG",
        url: "https://www.geeksforgeeks.org/traveling-salesman-problem-tsp-using-dynamic-programming/",
      },
    ],
  },
  {
    day: 42,
    topic: "Segment Tree / Fenwick Tree (BIT)",
    content: "Range queries, point updates, tree building",
    references: [
      {
        title: "Fenwick Tree",
        url: "https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree/",
      },
    ],
    problems: [
      {
        id: "LC-307",
        title: "Range Sum Query - Mutable",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/range-sum-query-mutable/",
      },
      {
        id: "CF-RMQ",
        title: "Range Query practice (Codeforces)",
        platform: "Codeforces",
        url: "https://codeforces.com/problemset",
      },
    ],
  },
  {
    day: 43,
    topic: "Advanced Graphs (MST, flows intro)",
    content: "Kruskal, Prim, basic max-flow intuition",
    references: [
      {
        title: "MST Algorithms",
        url: "https://www.geeksforgeeks.org/minimum-spanning-tree-kruskals-algorithm/",
      },
    ],
    problems: [
      {
        id: "LC-1168",
        title: "Optimize Water Distribution in a Village (MST variant)",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/optimize-water-distribution-in-a-village/",
      },
      {
        id: "LC-1584",
        title: "Min Cost to Connect All Points",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/min-cost-to-connect-all-points/",
      },
    ],
  },
  {
    day: 44,
    topic: "String Algorithms (KMP, Z, Rolling Hash)",
    content: "Pattern searching, failure function, Rabin-Karp hashing",
    references: [
      {
        title: "KMP Algorithm",
        url: "https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/",
      },
    ],
    problems: [
      {
        id: "LC-28",
        title: "Implement strStr()",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/implement-strstr/",
      },
      {
        id: "GFG-RK",
        title: "Rabin Karp String Matching",
        platform: "GFG",
        url: "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/",
      },
    ],
  },
  {
    day: 45,
    topic: "Math & Number Theory",
    content: "GCD, modular arithmetic, exponentiation, CRT basics",
    references: [
      {
        title: "Modular Arithmetic",
        url: "https://www.geeksforgeeks.org/modular-exponentiation-power-in-modular-arithmetic/",
      },
    ],
    problems: [
      {
        id: "LC-50",
        title: "Pow(x, n)",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/powx-n/",
      },
      {
        id: "LC-507",
        title: "Perfect Number",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/perfect-number/",
      },
      {
        id: "GFG-GCD",
        title: "GCD practice",
        platform: "GFG",
        url: "https://practice.geeksforgeeks.org/problems/gfg-practice-problems",
      },
    ],
  },
  {
    day: 46,
    topic: "Randomized Algorithms & Probabilistic Techniques",
    content: "Reservoir sampling, randomized quickselect",
    references: [
      {
        title: "Reservoir Sampling",
        url: "https://www.geeksforgeeks.org/reservoir-sampling/",
      },
    ],
    problems: [
      {
        id: "LC-382",
        title: "Linked List Random Node",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/linked-list-random-node/",
      },
      {
        id: "LC-215-rand",
        title: "Quickselect (practice Kth)",
        platform: "LeetCode",
        url: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      },
    ],
  },
  {
    day: 47,
    topic: "Timed Contest Simulation (3 hrs)",
    content: "Pick a CodeChef/LeetCode contest; solve 3 problems in 3 hours",
    references: [
      { title: "CodeChef Contests", url: "https://www.codechef.com/contests" },
    ],
    problems: [
      {
        id: "CC-SIM",
        title: "Choose live contest problems",
        platform: "CodeChef/LeetCode",
        url: "https://www.codechef.com/contests",
      },
    ],
  },
  {
    day: 48,
    topic: "Mock Interview — 2 problems timed",
    content:
      "Simulate interview pairing: solve 1 medium + 1 hard in 45–60 mins",
    references: [],
    problems: [
      {
        id: "LC-Example1",
        title: "Pick a medium from LeetCode Explore",
        platform: "LeetCode",
        url: "https://leetcode.com/explore/featured/card/top-interview-questions/",
      },
      {
        id: "LC-Example2",
        title: "Pick a hard",
        platform: "LeetCode",
        url: "https://leetcode.com/problemset/all/",
      },
    ],
  },
  {
    day: 49,
    topic: "Review & Optimization",
    content: "Revisit slow solutions; optimize time and space",
    references: [],
    problems: [],
  },
  {
    day: 50,
    topic: "Mini Contest / Rest",
    content: "Either rest or participate in a short timed contest",
    references: [],
    problems: [
      {
        id: "LC-CON",
        title: "Pick a contest",
        platform: "LeetCode/CodeChef",
        url: "https://leetcode.com/contest/",
      },
    ],
  },
  {
    day: 51,
    topic: "Project Day 1 — Plan & MVP for AlgoVisualizer",
    content:
      "Define features: visualizations for sorting, searching, graph traversal; tech stack",
    references: [{ title: "D3.js Docs", url: "https://d3js.org/" }],
    problems: [],
  },
  {
    day: 52,
    topic: "Project Day 2 — Core Visualization: Sorting",
    content:
      "Implement visualizers for bubble, merge, quick sort with step control",
    references: [],
    problems: [],
  },
  {
    day: 53,
    topic: "Project Day 3 — Visualize Searches & Traversals",
    content: "Binary search, BFS/DFS visualizations, complexity counters",
    references: [],
    problems: [],
  },
  {
    day: 54,
    topic: "Project Day 4 — Complexity Metrics & Profile",
    content: "Show T/S complexity estimations and live operation counts",
    references: [],
    problems: [],
  },
  {
    day: 55,
    topic: "Project Day 5 — CodeBattle Arena (Plan)",
    content: "Define judge workflow, problem upload, user submissions, scoring",
    references: [{ title: "Judge0 API", url: "https://judge0.com/" }],
    problems: [],
  },
  {
    day: 56,
    topic: "Project Day 6 — Implement Judge + Runner",
    content:
      "Integrate Judge0 or create local runner; test with sample problems",
    references: [],
    problems: [],
  },
  {
    day: 57,
    topic: "Project Day 7 — UX, Leaderboard & Analytics",
    content: "Build leaderboard, track accuracy, average T/S per problem",
    references: [],
    problems: [],
  },
  {
    day: 58,
    topic: "Project Day 8 — Polish, README, Deployment",
    content: "Write README, host on GitHub Pages / Vercel, add demo GIFs",
    references: [],
    problems: [],
  },
  {
    day: 59,
    topic: "Project Day 9 — Resume & Interview Prep",
    content:
      "Prepare talking points, metrics to show (100+ problems solved, 2 projects)",
    references: [],
    problems: [],
  },
  {
    day: 60,
    topic: "Final Mock Hiring Week & Celebration",
    content:
      "2 full mock interviews + system design quicks; finalize portfolio",
    references: [],
    problems: [
      {
        id: "LC-FINAL",
        title: "Pick 2 hire‑style problems",
        platform: "LeetCode",
        url: "https://leetcode.com/problemset/all/",
      },
    ],
  },
];

export default function DsaTracker60() {
  const [days] = useState(DATA);
  const [selected, setSelected] = useState(1);
  const [completed, setCompleted] = useState(() => {
    // load from localStorage
    try {
      const raw = localStorage.getItem("dsa60_completed");
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem("dsa60_completed", JSON.stringify(completed));
  }, [completed]);

  function toggleProblemDone(day: number, pid: string) {
    setCompleted((prev: any) => {
      const copy = { ...(prev || {}) };
      copy[day] = copy[day] || {};
      copy[day][pid] = !copy[day][pid];
      return copy;
    });
  }

  interface Reference {
    title: string;
    url: string;
  }
  interface Problem {
    id: string;
    title: string;
    platform: string;
    url: string;
  }
  interface Day {
    day: number;
    topic: string;
    content: string;
    references?: Reference[];
    problems?: Problem[];
  }
  type CompletedMap = { [day: number]: { [pid: string]: boolean } };

  function markDayDone(day: number): void {
    const dayObj: Day | undefined = (days as Day[]).find((d) => d.day === day);
    if (!dayObj) return;
    const newComp: CompletedMap = { ...(completed || {}) } as CompletedMap;
    newComp[day] = {};
    (dayObj.problems || []).forEach((p: Problem) => {
      newComp[day][p.id] = true;
    });
    setCompleted(newComp);
  }

  function progressForDay(day: number) {
    const dayObj = days.find((d) => d.day === day);
    if (!dayObj || !dayObj.problems || dayObj.problems.length === 0) return 0;
    const done = Object.values(completed[day] || {}).filter(Boolean).length;
    return Math.round((done / dayObj.problems.length) * 100);
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold">60-Day DSA Checklist & Tracker</h1>
          <p className="text-sm mt-2">
            Daily topics, references and 3–5 problems per day. Track progress &
            build projects.
          </p>
        </header>

        <main className="grid grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="col-span-1 bg-black border border-white p-4 rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            <h2 className="font-semibold mb-3 text-white">Days</h2>
            <div className="space-y-2 max-h-[70vh] overflow-auto">
              {days.map((day) => (
                <button
                  key={day.day}
                  onClick={() => setSelected(day.day)}
                  className={`w-full text-left p-2 border border-white rounded ${
                    selected === day.day
                      ? "bg-white text-black"
                      : "hover:bg-white hover:text-black"
                  } transition-all`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      Day {day.day}: {day.topic}
                    </div>
                    <div className="text-sm">{progressForDay(day.day)}%</div>
                  </div>
                </button>
              ))}
            </div>
          </aside>

          {/* Main Section */}
          <section className="col-span-3 bg-black border border-white p-6 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            {(() => {
              const d = days.find((x) => x.day === selected);
              if (!d) return <div>No data</div>;
              return (
                <div>
                  <div className="flex justify-between items-start flex-wrap">
                    <div className="mb-3 md:mb-0">
                      <h2 className="text-2xl font-bold">
                        Day {d.day}: {d.topic}
                      </h2>
                      <p className="mt-2 text-sm">{d.content}</p>

                      {d.references && d.references.length > 0 && (
                        <div className="mt-3">
                          <h3 className="font-semibold">References</h3>
                          <ul className="list-disc ml-6 text-sm mt-2">
                            {d.references.map((r, idx) => (
                              <li key={idx}>
                                <a
                                  className="underline hover:opacity-70"
                                  href={r.url}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {r.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="text-right">
                      <button
                        onClick={() => markDayDone(d.day)}
                        className="px-3 py-2 bg-white text-black border border-white rounded hover:bg-black hover:text-white transition-all"
                      >
                        Mark all done
                      </button>
                      <div className="mt-2 text-sm">
                        Progress: {progressForDay(d.day)}%
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-semibold text-lg">Problems</h3>
                    <div className="mt-3 grid gap-3">
                      {(d.problems || []).map((p) => (
                        <div
                          key={p.id}
                          className="flex items-center justify-between p-3 border border-white rounded transition hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                        >
                          <div>
                            <div className="text-xs mb-1">
                              #{p.id} • {p.platform}
                            </div>
                            <a
                              className="font-medium underline hover:opacity-70"
                              href={p.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {p.title}
                            </a>
                          </div>

                          <div className="flex items-center gap-3">
                            <label className="text-sm">Done</label>
                            <input
                              type="checkbox"
                              className="w-4 h-4 accent-white cursor-pointer"
                              checked={
                                !!(completed[d.day] && completed[d.day][p.id])
                              }
                              onChange={() => toggleProblemDone(d.day, p.id)}
                            />
                          </div>
                        </div>
                      ))}
                      {(!d.problems || d.problems.length === 0) && (
                        <div>
                          No problems for today — focus on project/tasks.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })()}
          </section>
        </main>

        <footer className="mt-6 text-center text-sm">
          Auto-saves to localStorage. Use this as your 60-day DSA daily
          checklist & tracker.
        </footer>
      </div>
    </div>
  );
}
